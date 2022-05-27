import {useRef} from 'react';

const App = () => {
  const ref = useRef(null);

  const handleClick = event => {
    // 👇️ access textarea value
    alert(ref.current.value);
  };

  return (
    <div>
      <label htmlFor="message">My Textarea</label>
      <textarea ref={ref} id="message" name="message" />

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
