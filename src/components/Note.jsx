import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";

function Note(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="note-container">
      <div className="note" onClick={handleOpen}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>

      <Modal open={open} onClose={handleClose}>
        <div className="edit-note"></div>
      </Modal>
    </div>
  );
}

export default Note;
