import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const InputItems = ({tasks, setTasks}) => {
    const [inputItem, setInputItem] = useState('')
    const addNewTask = () => {
        const newTask = {id: uuidv4(), name: inputItem, done: false, trash: false}
        setTasks([...tasks, newTask])
        setInputItem('')
    }
    return (
        <div>
            <input type='text' placeholder='add new task ...'
                   value={inputItem}
                   onChange={(e) => setInputItem(e.target.value)}
            />
            <button disabled={inputItem === ''} onClick={addNewTask}>Add Task</button>
        </div>
    );
};

export default InputItems;
