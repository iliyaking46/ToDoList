import React from 'react';

export default ({ isEditing, changeEdit, saveEdit, data }) =>
  isEditing ? (
    <div>
      <button
        className="btn btn-success mr-2"
        onClick={() => saveEdit(data)}
      >
        Save
      </button>
      <button className="btn btn-danger" onClick={changeEdit}>
        Cancel
      </button>
    </div>
  ) : (
    <button className="btn btn-primary mr-2" onClick={changeEdit}>
      Edit
    </button>
  );
