import basketball from './basketball.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

// import ReactDOM from "react-dom";

function MyForm() {
  const [textarea, setQueryText] = useState('');

  const handleChange = event => {
    setQueryText(event.target.value);
  }

  const handleClick = () => {
    alert(textarea);
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
      <button type="submit" className="btn btn-info" onClick={handleClick}>Submit Query</button>
    </div>
  )
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
      </header>
    </div>
  );
}

export default App;
