import React from 'react';

export default function Radio(props) {
  const types = props.types;
  const onChange = props.onChange;
  return (
    <div>
      {
        types.map((type, index) => {  
          return (
            <div className="custom-control custom-radio" key={`${type.value}${type.label}${index}`}>
              <input 
                type="radio" 
                value={type.value}
                id={`${type.value}${index}`} 
                name="customRadio" 
                className="custom-control-input"
                onChange={e => onChange(e.target.value)}
              />
              <label className="custom-control-label" htmlFor={`${type.value}${index}`}>{type.label}</label>
            </div>
          )
        })
      }
    </div>
  )
    
}