import React, { useState } from "react";
import uuid from "react-uuid";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import ClickAwayListener from "@mui/material/ClickAwayListener";

function CreateArea(props) {
  const [input, changeInput] = useState({
    id: "",
    title: "",
    content: "",
  });

  const [isExpanded, changeExpanded] = useState(false);

  function handleInput(event) {
    const { name, value } = event.target;
    changeInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleAdd(event) {
    input.id = uuid();
    props.onAdd(input);
    changeInput({ id: "", title: "", content: "" });
    event.preventDefault();
  }

  function handleExpand() {
    changeExpanded(true);
  }

  function handleCollapse() {
    changeExpanded(false);
  }

  return (
    <ClickAwayListener onClickAway={handleCollapse}>
      <div>
        <form className="create-note">
          <input
            name="title"
            placeholder="Title"
            value={input.title}
            onChange={handleInput}
            hidden={!isExpanded}
          />
          <textarea
            name="content"
            placeholder="Take a note..."
            rows={isExpanded ? "3" : "1"}
            value={input.content}
            onChange={handleInput}
            onClick={handleExpand}
          />
          <Zoom in={isExpanded}>
            <Fab onClick={handleAdd}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    </ClickAwayListener>
  );
}

export default CreateArea;
