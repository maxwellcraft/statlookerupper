import basketball from './basketball.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import DoSomething from './QueryResults';

// import ReactDOM from "react-dom";
// setting up a backend data model

function MyForm() {
  const [textarea, setQueryText] = useState('');

  const handleChange = event => {
    setQueryText(event.target.value);
  }

  return (
    <div className="form-group">
      <label htmlFor="queryText"></label>
      <textarea 
        id="queryText"
        name="queryText"
        className="form-control" rows="5"
        onChange={handleChange}
        />
    </div>
  )
}

//Button Class
class Resulter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className='container'>
        <button type="submit" className="btn btn-info" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Query Submitted' : 'Submit Query'}
        </button>
        {this.state.isToggleOn && <DoSomething/>}
      </div>
    )
  }
}

function App() {

  return (
    
    <div className="App">
      <header className="App-header">
        <div className="title">
          <img src={basketball} className="App-logo" alt="logo" />
          <p>
            Statlookerupper
          </p>
        </div>

        <div className="container">
          <MyForm/>
        </div>

        <div className='container'>
          <Resulter/>
        </div>

      </header>
    </div>
  );
}

export default App;
