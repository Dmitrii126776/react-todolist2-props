import React, {useState} from 'react';
import DeleteModal from "./DeleteModal";

const TrashTasks = (props) => {
    const {tasks, moveToTrashOrBack, setTasks} = props

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    const [deleteTaskId, setDeleteTaskId] = useState('')
    const [deleteTaskName, setDeleteTaskName] = useState('')

    const delTask = (id, name) => {
        // console.log(id)
        // console.log(name)
        setDeleteTaskId(id)
        setDeleteTaskName(name)
        toggle()
    }


    return (
        <div>
            <h2>Trash Tasks</h2>
            <ol>
                {tasks.filter(el => el.trash).map(el =>
                    (
                        <li key={el.id}>
                            {el.done ? <s>{el.name}</s> : el.name}
                            <button onClick={() => moveToTrashOrBack(el.id)}>Restore</button>
                            <button onClick={() => delTask(el.id, el.name)}>Delete</button>
                            <DeleteModal modal={modal} toggle={toggle}
                                         tasks={tasks} setTasks={setTasks}
                                         deleteTaskId={deleteTaskId}
                                         deleteTaskName={deleteTaskName}
                            />
                        </li>
                    ))}
            </ol>
        </div>
    );
};

export default TrashTasks;
