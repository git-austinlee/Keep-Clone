import React, { useState, createRef, forwardRef } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import EditArea from "./EditArea";

function Note(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  function handleClose() {
    const newNote = editRef.current.submitEdit();
    setOpen(false);
    props.onEdit(newNote);
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  const editRef = createRef();
  const EditNote = forwardRef((props, ref) => {
    return <EditArea {...props} ref={ref} />;
  });

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
        <div>
          <EditNote
            id={props.id}
            title={props.title}
            content={props.content}
            ref={editRef}
          />
        </div>
      </Modal>
    </div>
  );
}

export default Note;
