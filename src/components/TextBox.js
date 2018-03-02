import React from 'react';

export default function TextBox(props) {
  const onChange = props.onChange;
  const value = props.value || '';
  return (
    <div className="col">
      <input
        className="form-control"
        placeholder="Enter value"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
