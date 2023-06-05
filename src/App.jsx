import { useEffect } from "react";
import { useState } from "react";
import AddNote from "./components/AddNote";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Note from "./components/Note";
function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://firenote-55825-default-rtdb.firebaseio.com/notes.json"
      );

      if (!response.ok) {
        throw new Error("Cannot connect to the Firebase");
      }
      const notes = await response.json();

      const modifiedNotes = [];

      for (const key in notes) {
        modifiedNotes.push({
          id: key,
          note: notes[key],
        });
      }
      setNotes(modifiedNotes);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="logo">
      <NavBar totalNotes={notes.length} />

      {loading && !error && <p className="message">Getting Notes ...</p>}
      {!loading && error && <p className="message error">{error}</p>}

      {!loading && !error && (
        <>
          <AddNote getNotes={getNotes} />
          {notes.map((note, index) => (
            <Note key={index} note={note} getNotes={getNotes} />
          ))}
        </>
      )}
      {notes.length === 0 && <Intro />}
    </div>
  );
}

export default App;
