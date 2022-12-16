import {v4 as uuidv4} from 'uuid';
import './App.css';
import InputItems from "./InputItems";
import ListItems from "./ListItems";
import {useState} from "react";
import TrashItems from "./TrashItems";


function App() {

    const [tasks, setTasks] = useState([
        {id: uuidv4(), name: 'Learn React', done: false, trash: false},
        {id: uuidv4(), name: 'Learn FireBase', done: false, trash: false}
    ])

    const moveToTrashOrBack = (id) => {
        setTasks(tasks.map(el => el.id === id ? {...el, trash: !el.trash} : el))
    }


    return (
        <div className="App">
            <h2>Tasks List</h2>
            <InputItems tasks={tasks} setTasks={setTasks}/>
            <ol>
                {tasks.filter(el => !el.trash).map(el =>
                    (
                        <ListItems
                            key={el.id}
                            todo={el}
                            tasks={tasks}
                            setTasks={setTasks}
                            moveToTrashOrBack={moveToTrashOrBack}
                        />
                    ))}
            </ol>
            <hr/>
            <TrashItems tasks={tasks}
                        moveToTrashOrBack={moveToTrashOrBack}
                        setTasks={setTasks}
            />
        </div>
    );
}

export default App;
