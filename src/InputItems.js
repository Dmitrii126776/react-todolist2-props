import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const InputItems = ({todos, setTodos}) => {

    const [inputItem, setInputItem] = useState('')

    const addNewTask = () => {
        const newItem = {id: uuidv4(), name: inputItem}
        setTodos([...todos, newItem])
        setInputItem('')
    }

    return (
        <div>
            <input type='text' placeholder='new task ...'
                   value={inputItem}
                   onChange={(e) => setInputItem(e.target.value)}
            />
            <button onClick={addNewTask} disabled={inputItem === ''}>Add task</button>
        </div>
    );
};

export default InputItems;
