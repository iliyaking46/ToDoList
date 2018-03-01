import React from 'react';

export default ({ id, isEditing, removeTodo }) =>
  isEditing ? (
    ''
  ) : (
    <button className="btn btn-danger mr-3" onClick={() => removeTodo(id)}>
      Remove
    </button>
  );
