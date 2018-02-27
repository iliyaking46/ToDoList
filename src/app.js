import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>I'm App</h1>
      </div>
    );
  }
}

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(<App />, MOUNT_NODE);
