import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    fieldValue: '',
    postedStuff: ['test1', 'test2'],
    saves: [],
    saveName: '',
  };

  // React DOM methods

  componentDidMount() {
    for (const property in localStorage) {
      if (property.startsWith('testsaves123 -')) this.setState({ saves: [...this.state.saves, property] });
    }
  }

  componentDidUpdate() {
    let saves = [];
    for (const property in localStorage) {
      if (property.startsWith('testsaves123 -')) saves.push(property);
    }
    if (JSON.stringify(saves) !== JSON.stringify(this.state.saves)) this.setState({ saves });
  }

  // Demo list methods

  handleChange = (event, value) => {
    event.preventDefault();
    this.setState({ fieldValue: value });
  };

  handleSubmit = (event, value) => {
    event.preventDefault();
    this.setState({ postedStuff: [...this.state.postedStuff, value] });
    this.setState({ fieldValue: '' });
  };

  // Save State methods

  handleSaveNameChange = (event, value) => {
    event.preventDefault();
    this.setState({ saveName: value });
  };

  handleSaveState = (event) => {
    event.preventDefault();
    let save1 = JSON.stringify(this.state);
    localStorage.setItem(`testsaves123 - ${this.state.saveName}`, save1);
    this.setState({ saveName: '' });
  };

  handleLoadState = (event, value) => {
    event.preventDefault();
    let save = localStorage.getItem(value);
    this.setState(JSON.parse(save));
    this.setState({ saveName: '' });
  };

  handleDeleteSave = (event, value) => {
    event.preventDefault();
    let saves = this.state.saves.filter((save) => save !== value);
    localStorage.removeItem(value);
    this.setState({ saves });
  };

  handleClearStorage = (event) => {
    event.preventDefault();
    localStorage.clear();
    this.setState({ saves: [] });
  };

  // Render method

  render() {
    return (
      <div className='App'>
        {this.state.postedStuff && this.state.postedStuff.map((stuff, i) => <div key={i}>{stuff}</div>)}
        <form className='add-to-list' onSubmit={(event) => this.handleSubmit(event, this.state.fieldValue)}>
          <input
            type='text'
            name='text-input'
            id='text-input'
            value={this.state.fieldValue}
            onChange={(event) => this.handleChange(event, event.target.value)}
          ></input>
          <button>Submit Stuff</button>
        </form>
        <div>
          <form className='save-state' onSubmit={(event) => this.handleSaveState(event)}>
            <input
              type='text'
              name='save-name'
              id='save-name'
              value={this.state.saveName}
              onChange={(event) => this.handleSaveNameChange(event, event.target.value)}
            ></input>
            <button>Save State</button>
          </form>
          {this.state.saves &&
            this.state.saves.map((stuff, i) => (
              <div key={i}>
                <button onClick={(event) => this.handleLoadState(event, stuff)}>Load Save</button>
                {stuff}
                <button onClick={(event) => this.handleDeleteSave(event, stuff)}>Delete Save</button>
              </div>
            ))}
          <button onClick={(event) => this.handleClearStorage(event)}>Clear Storage</button>
        </div>
      </div>
    );
  }
}

export default App;
