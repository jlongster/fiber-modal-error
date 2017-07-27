import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';

class App extends Component {
  constructor() {
    super();
    this.state = { open: true };
  }

  render() {
    return (
      <div className="App">
        Yo
        {this.state.open &&
          <Modal
            isOpen={true}
            contentLabel="Hello!"
            onRequestClose={() => this.setState({ open: false })}
            style={{
              content: {
                top: '48%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                minWidth: '500px',
                minHeight: '300px',
                transform: 'translate(-50%, -50%)'
              }
            }}
          >
            Hello
          </Modal>}
      </div>
    );
  }
}

export default App;
