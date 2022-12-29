import React, {useState} from 'react';

const TasksItems = (props) => {
    const {task, setTasks, tasks, moveToTrashOrBack} = props

    const [inputEdit, setInputEdit] = useState(task.name)

    const doneTaskOrBack = (id) => {
        setTasks(tasks.map(el => el.id === id ? {...el, done: !el.done} : el))
    }

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const saveEditTask = (id) => {
        setTasks(tasks.map(el => el.id === id ? {...el, name: inputEdit} : el))
        setInputEdit(inputEdit)
        toggle()
    }
    const cancelEditTask = (id) => {
        setTasks(tasks.map(el => el.id === id ? {...el, name: task.name} : el))
        setInputEdit(task.name)
        toggle()
    }

    return (
        <div>
            <li>
                {task.done ? <s>{task.name}</s> : task.name}
                {isOpen &&
                    <>
                        <input type='text' value={inputEdit}
                               onChange={e => setInputEdit(e.target.value)}/>
                        <button onClick={() => saveEditTask(task.id)}>Save</button>
                        <button onClick={() => cancelEditTask(task.id)}>Cancel</button>
                    </>
                }
                {
                    !isOpen &&
                    <>
                        <button onClick={toggle}>Edit</button>
                        <button onClick={() => doneTaskOrBack(task.id)}>Done</button>
                        <button onClick={() => moveToTrashOrBack(task.id)}>Trash</button>
                    </>
                }
            </li>
        </div>
    );
};

export default TasksItems;
