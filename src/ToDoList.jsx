import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faAnglesDown } from '@fortawesome/free-solid-svg-icons';

function ToDoList() {

    const [tasks, setTasks] = useState(["testando task", "testando dnv", "ultimo test"]);
    const { newtask, setNewtask } = useState("");

    function handleInputChange(event) {
        setNewtask(event.target.value);
    }

    function addTask() {

    }

    function deleteTask(index) { }
    function moveTaskUp(index) { }
    function moveTaskDown(index) { }

    return (<div className="ToDoList">
        <h1>To Do List</h1>
        <div className="inputToDoList">
            <input type="select" placeholder='Adicione uma tarefa' id="inputTask" value={newtask} onChange={handleInputChange} />
            <button id="addtaskbutton" onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>                        <button id="removebutton" onClick={deleteTask}>REMOVE</button>
                    <button id="movetaskup" onClick={moveTaskUp}>
                      <FontAwesomeIcon icon={faAnglesUp} />
                     </button>   
                    <button id="movetaskdown" onClick={moveTaskDown}><FontAwesomeIcon icon={faAnglesDown} /></button>
                </li>
            )}
        </ol>
    </div>);
}

export default ToDoList