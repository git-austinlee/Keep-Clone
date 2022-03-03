import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Grow from "@mui/material/Grow";

function Note(props) {
  const [checked, setChecked] = useState(true);

  function handleDelete() {
    setChecked(false);
    props.onDelete(props.id);
    setChecked(true);
  }

  return (
    <Grow in={checked}>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>
    </Grow>
  );
}

export default Note;
