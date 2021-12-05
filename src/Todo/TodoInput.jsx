import React, { useState } from "react";
import Button from "../Components/Button";

const TodoInput = ({ onTextCreate }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    onTextCreate(text);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Write Something"
        onChange={handleChange}
      />
      <Button title="Add Item" onClick={handleClick} />
    </div>
  );
};

export default TodoInput;
