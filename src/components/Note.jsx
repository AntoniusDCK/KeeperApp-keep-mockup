import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "../CSS/styles.css";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteOutlineIcon />
      </button>
    </div>
  );
}

export default Note;
