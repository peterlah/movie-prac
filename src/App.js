// import Button from './Button';
// import styles from "./App.module.css";
import { useState, useEffect } from 'react';

function App() {
  const [keyword, setKeyword] = useState("");
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // console.log('i run all the time');
  
  useEffect(() => {
    console.log('CALL THE API...');
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log('Search for ', keyword);
    };
  }, [keyword]);
  
  useEffect(() => {
    console.log('counter changed');
  }, [counter]);
  
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder='Search here' />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
