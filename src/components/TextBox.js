import React from 'react';

export default function TextBox(props) {
  const onChange = props.onChange;
  const value = props.value || '';
  return (
    <div className="col mr-2">
      <input className="form-control" type="text" value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
}
