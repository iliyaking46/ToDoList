import React from 'react';

export default ({ isEditing, value, id }) =>
  isEditing ? (
    <div className="form-group mb-0 mr-2 col-10">
      <input
        type="text"
        className="form-control"
        defaultValue={value}
        id={id}
      />
    </div>
  ) : (
    <div className="form-group mb-0 mr-2 col-10 pl-4">
      <input
        readOnly
        type="text"
        className="form-control-plaintext"
        value={value}
      />
    </div>
  );
