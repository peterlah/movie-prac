import { useEffect, useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => { setTodo(event.target.value); };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo ===""){
      return;
    }
    setTodo("");
    // setTodos([...todos, todo]);
    setTodos((currentArray) => [todo, ...currentArray]);
  };
  
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <h1>To Do List ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type='text' placeholder='Write your to do...'/>
        <button>Add To Do</button>
      </form>
      <hr />
      {todos.map((item, index) => {
        return (
            <li key={index}>{item}</li>
        );
      })}
    </div>
  );
}

export default App;
