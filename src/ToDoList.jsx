import React, { useState } from 'react'

function ToDoList() {

    const [ tasks, setTasks ] = useState(["testando task", "testando dnv", "ultimo test"]);
    const { newtask, setNewtask } = useState("");

    function handleInputChange(event) {
        setNewtask(event.target.value);
    }

    function addTask() {
        
    }

    function deleteTask(index) {}
    function moveTaskUp(index) {}
    function moveTaskDown(index) {}

    return (<div className="ToDoList">
        <h1>To Do List</h1>
        <div className="inputToDoList">
            <input type="select" placeholder='Adicione uma tarefa' id="inputTask" value={newtask} onChange={handleInputChange} />
            <button id="addbutton" onClick={addTask}>Add</button>
        </div>
            <ol>
                {tasks.map((task,index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                    </li>
                )}
            </ol>
    </div>);
}

export default ToDoList