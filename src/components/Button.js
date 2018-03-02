import React from 'react';

export default function Button(props) {
  const onClick = props.onClick;
  const children = props.children;
  return <button className="btn btn-primary mr-2" onClick={onClick}>{children}</button>;
}
