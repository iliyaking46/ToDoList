import React from 'react';

export default ({ id, isEditing, removeTodo }) =>
  isEditing ? (
    ''
  ) : (
    <button className="btn btn-danger" onClick={() => removeTodo(id)}>
      Remove
    </button>
  );
