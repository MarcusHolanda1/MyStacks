import React from 'react';
import Button from './Button'

import './AddTask.css'

const AddTask = () => {
    return ( 
        <div className="add-task-container">
            <input type="text" className="add-task-input"/>
            <Button>Adicionar</Button>
        </div>
    );
}
 
export default AddTask;