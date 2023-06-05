import React from "react";
import DeleteIcon from "../svgs/DeleteIcon";

const Note = ({ note, getNotes }) => {
  // destructor note object
  const { note: text, id } = note;

  // delete note
  const deleteNote = async () => {
    try {
      const response = await fetch(
        `https://firenote-55825-default-rtdb.firebaseio.com/notes/${id}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Fail to delete this note");
      }
      getNotes();
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="card card-ctr">
      <h3>+ {text}</h3>
      <div onClick={deleteNote}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Note;
