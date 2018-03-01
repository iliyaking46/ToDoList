import React from 'react';

export default ({ isEditing, value, id }) =>
  isEditing ? (
    <div className="form-group mb-0 mr-2 col mr-auto">
      <input className="form-control" defaultValue={value} id={id} />
    </div>
  ) : (
    <div className="form-group mb-0 mr-2 col-9 pl-4 mr-auto">
      <p type="text" className="form-control-plaintext">
        {value}
      </p>
    </div>
  );
