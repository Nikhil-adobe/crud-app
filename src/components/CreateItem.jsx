import React, { useState } from "react";

const CreateItem = ({ onCreate }) => {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onCreate(name);
      setName(""); // Reset
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter item name"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default CreateItem;
