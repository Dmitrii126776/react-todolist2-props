import {v4 as uuidv4} from 'uuid';
import './App.css';
import {useState} from "react";
import InputItems from "./InputItems";
import ListItems from "./ListItems";

function App() {
    const [todos, setTodos] = useState([
        {id: uuidv4(), name: 'React'}, {id: uuidv4(), name: 'Redux'}
    ])

    const updateTask = (id, name) => {
        setTodos(todos.map(el => el.id === id ? {...el, name: name} : el))
    }

    const deleteTask = (id) => {
        setTodos(todos.filter(el => el.id !== id))
    }

    return (
        <div className="App">
            <h2>Tasks List</h2>
            <InputItems todos={todos} setTodos={setTodos}/>
            <ol>
                {todos.map(el => (<ListItems
                    task={el}
                    key={el.id}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />))}
            </ol>

        </div>
    );
}

export default App;
