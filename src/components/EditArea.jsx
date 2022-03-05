import React, { forwardRef, useImperativeHandle, useState } from "react";

const EditArea = forwardRef((props, ref) => {
  const [input, changeInput] = useState({
    id: props.id,
    title: props.title,
    content: props.content,
  });

  function handleInput(event) {
    const { name, value } = event.target;
    changeInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  useImperativeHandle(ref, () => ({
    submitEdit: () => input,
  }));

  return (
    <div>
      <form className="edit-note">
        <input
          name="title"
          placeholder="Title"
          value={input.title}
          onChange={handleInput}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="10"
          value={input.content}
          onChange={handleInput}
        />
      </form>
    </div>
  );
});

export default EditArea;
