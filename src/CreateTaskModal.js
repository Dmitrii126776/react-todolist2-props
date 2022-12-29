import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input} from 'reactstrap';
import {v4 as uuidv4} from 'uuid';

function CreateTaskModal(props) {
    const {tasks, setTasks} = props

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [inputValue, setInputValue] = useState('')

    const addTask = () => {
        const newTask = {id: uuidv4(), name: inputValue, done: false, trash: false}
        setTasks([...tasks, newTask])
        setInputValue('')
        toggle()
    }

    const cancelAddTask = () => {
        setInputValue('')
        toggle()
    }

    return (
        <div>
            <Button color="primary" onClick={toggle}>
                Add New Task
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add New Task</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputGroupText>
                            New Task
                        </InputGroupText>
                        <Input placeholder="add new task ..."
                               value={inputValue} onChange={e => setInputValue(e.target.value)}
                        />
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={addTask} disabled={inputValue === ''}>
                        Add Task
                    </Button>{' '}
                    <Button color="secondary" onClick={cancelAddTask}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default CreateTaskModal;
