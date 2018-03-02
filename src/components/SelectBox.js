import React from 'react';

export default function SelectBox(props) {
  const options = props.options;
  const value = props.value;
  const onChange = props.onChange;
  return (
    <div className="pl-3 pr-3">
      <select
        className="custom-select"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(item => {
          return (
            <option key={`${item.value}${item.label}`} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
