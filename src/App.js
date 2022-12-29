import {v4 as uuidv4} from 'uuid';
import './App.css';
import {useState} from "react";
import TasksItems from "./TasksItems";
import TrashTasks from "./TrashTasks";
import CreateTaskModal from "./CreateTaskModal";


function App() {

    const list = [
        {id: uuidv4(), name: 'Learn React', done: false, trash: false},
        {id: uuidv4(), name: 'Learn Express', done: false, trash: false},
    ]

    const [tasks, setTasks] = useState(list)

    const moveToTrashOrBack = (id) => {
        setTasks(tasks.map(el => el.id === id ? {...el, trash: !el.trash} : el))
    }


    return (
        <div className="App">
            <h1>TodoList</h1>
            <CreateTaskModal tasks={tasks} setTasks={setTasks}/>
            <h2>Tasks List</h2>
            <ol>
                {tasks.filter(el => !el.trash).map(el =>
                    (
                        <TasksItems
                            key={el.id}
                            task={el}
                            tasks={tasks}
                            setTasks={setTasks}
                            moveToTrashOrBack={moveToTrashOrBack}
                        />
                    ))}
            </ol>
            <TrashTasks tasks={tasks} setTasks={setTasks}
                        moveToTrashOrBack={moveToTrashOrBack}
            />
        </div>
    );
}

export default App;
