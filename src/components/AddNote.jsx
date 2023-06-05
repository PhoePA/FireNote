import { useState } from "react";

const AddNote = ({ getNotes }) => {
  // define State
  const [note, setNote] = useState("");

  // add new note
  const addNote = async (e) => {
    e.preventDefault();
    if (note.trim().length === 0) {
      alert("Please Enter a Note");
      return;
    }
    try {
      await fetch(
        "https://firenote-55825-default-rtdb.firebaseio.com/notes.json",
        {
          method: "POST",
          body: JSON.stringify(note),
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      setNote("");
      getNotes();
    } catch (err) {
      alert("Something went Wrong. Please Try Again Later!");
    }
  };
  return (
    <section>
      <form action="#" className="card" onSubmit={addNote}>
        <input
          type="text"
          placeholder="Add Note Here!"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="submit-btn">Add Note</button>
      </form>
    </section>
  );
};

export default AddNote;
