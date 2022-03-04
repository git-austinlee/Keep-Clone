import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Modal from "@mui/material/Modal";
import Collapse from "@mui/material/Collapse";
import { TransitionGroup } from "react-transition-group";

function App() {
  const [notes, changeNotes] = useState([]);

  function addNote(text) {
    changeNotes((prevNotes) => {
      return [...prevNotes, text];
    });
    console.log(notes);
  }

  function deleteNote(id) {
    changeNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} title="" content="" />
      <TransitionGroup>
        {notes.map((note) => (
          <Collapse
            key={note.id}
            style={{ display: "inline-block" }}
            orientation="vertical"
          >
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          </Collapse>
        ))}
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
