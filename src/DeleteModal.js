import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function DeleteModal(props) {
    const {toggle, modal, deleteTaskId, deleteTaskName, tasks, setTasks} = props

    const deleteTask = () => {
        console.log(deleteTaskName)
        setTasks(tasks.filter(el => el.id !== deleteTaskId))
        toggle()
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Remove Task</ModalHeader>
                <ModalBody>
                    Do you want to remove {deleteTaskName} ?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={deleteTask}>
                        Remove
                    </Button>{' '}
                    <Button color="primary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteModal;
