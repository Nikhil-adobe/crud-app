import React, { useState } from "react";

const UpdateItem = ({ currentItem, onUpdate }) => {
  const [name, setName] = useState(currentItem ? currentItem.name : "");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onUpdate({ ...currentItem, name });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Update item name"
        required
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateItem;
