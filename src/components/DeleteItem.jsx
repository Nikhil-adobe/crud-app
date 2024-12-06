import React from "react";

const DeleteItem = ({ onDelete, id }) => {
  return (
    <button onClick={() => onDelete(id)} className="delete-btn">
      Delete
    </button>
  );
};

export default DeleteItem;
