import "./App.css";

import {BsTrash, BsBookMarkCheck, BsBookmarkCheckFill} from "react-icons/bs"
import { useState } from "react";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      <div className="todo-header">
        <h1>React Todo</h1>
      </div>
      <div className="form-todo">
        <p>Formulario</p>
      </div>
      <div className="list-todo">
        <h2>Lista de tarefas:</h2>
        {todos.length === 0 && <p>Não há tarefas</p>}
      </div>
    </div>
  );
}

export default App;
