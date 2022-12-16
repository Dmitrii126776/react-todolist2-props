import React from 'react';

const TrashItems = ({tasks, setTasks, moveToTrashOrBack}) => {

    const deleteTask = (id) => {
        setTasks(tasks.filter(el => el.id !== id))
    }
    return (
        <div>
            <ol>
                {tasks.filter(el => el.trash).map(el =>
                    (
                        <li key={el.id}>
                            <span style={el.done ? {textDecoration: "line-through"} : null}>
                            {el.name}
                            </span>
                            <button onClick={() => moveToTrashOrBack(el.id)}>Restore</button>
                            <button onClick={() => deleteTask(el.id)}>Delete</button>
                        </li>
                    ))}
            </ol>
        </div>
    );
};

export default TrashItems;
