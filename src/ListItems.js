import React, {useState} from 'react';

const ListItems = (props) => {
    const {task, updateTask, deleteTask} = props
    const [inputValue, setInputValue] = useState(task.name)
    const [isOpen, setIsOpen] = useState(false)

    const saveUpdateTask = () => {
        updateTask(task.id, inputValue)
        setInputValue(inputValue)
        toggle()
    }


    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const cancelUpdateTask = () => {
        toggle()
        updateTask(task.id, task.name)
        setInputValue(task.name)
    }

    return (
        <div>
            <li>{task.name}
                {isOpen &&
                    <>
                        <input type='text' value={inputValue}
                               onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={saveUpdateTask}>Save</button>
                        <button onClick={cancelUpdateTask}>Cancel</button>
                    </>
                }
                {!isOpen &&
                    <>
                        <button onClick={toggle}>Update</button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </>
                }
            </li>
        </div>
    );
};

export default ListItems;
