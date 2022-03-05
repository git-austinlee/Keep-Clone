import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Collapse from "@mui/material/Collapse";
import { TransitionGroup } from "react-transition-group";

function App() {
  const [notes, changeNotes] = useState([]);

  function addNote(text) {
    changeNotes((prevNotes) => {
      return [...prevNotes, text];
    });
  }

  function deleteNote(id) {
    changeNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id;
      });
    });
  }

  function editNote(newNote) {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === newNote.id) {
        notes[i].title = newNote.title;
        notes[i].content = newNote.content;
        break;
      }
    }
    changeNotes([...notes]);
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
              onEdit={editNote}
            />
          </Collapse>
        ))}
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
