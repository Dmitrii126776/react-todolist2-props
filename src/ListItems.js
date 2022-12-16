import React, {useState} from 'react';

const ListItems = (props) => {
    const {todo, tasks, setTasks, moveToTrashOrBack} = props
    const [inputValue, setInputValue] = useState(todo.name)

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const saveTask = (id) => {
        setTasks(tasks.map(el => el.id === id ? {...el, name: inputValue} : el))
        setInputValue(inputValue)
        toggle()
    }

    const cancelTask = (id) => {
        setTasks(tasks.map(el => el.id === id ? {...el, name: todo.name} : el))
        setInputValue(todo.name)
        toggle()
    }

    const doneButton = (id) => {
        setTasks(tasks.map(el => el.id === id ? {...el, done: !el.done} : el))
    }

    return (
        <div>
            <li>
                <span style={todo.done ? {textDecoration: "line-through"} : null}>
                {todo.name}
                </span>

                {isOpen &&
                    <>

                        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                        <button onClick={() => saveTask(todo.id)}>Save</button>
                        <button onClick={() => cancelTask(todo.id)}>Cancel</button>
                    </>
                }
                {!isOpen &&
                    <>
                        <button onClick={toggle}>Update</button>
                        <button onClick={() => doneButton(todo.id)}>Done</button>
                        <button onClick={() => moveToTrashOrBack(todo.id)}>Trash</button>
                    </>
                }
            </li>
        </div>
    );
};

export default ListItems;
