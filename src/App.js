import "./styles.css";
import { useState, useEffect, React } from "react";
import { Todo } from "./Todo";

export default function App() {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const InputChange = () => {
    setTodos([...todos, name]);
    setName("");
  };
  useEffect(() => {
    console.log("Todos", todos);
  }, [todos]);

  return (
    <div className="App">
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={InputChange}>Add</button>
      <Todo todos={todos} />
    </div>
  );
}
