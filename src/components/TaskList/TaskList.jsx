import React, { useState } from 'react';
import Task from '../Task/Task';
import './TaskList.css';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    return (
        <div className="task-list">
            <h2>Task List</h2>
            <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="New Task" 
            />
            <button onClick={addTask}>Add Task</button>
            {tasks.map((task, index) => (
                <Task key={index} task={task} />
            ))}
        </div>
    );
}

export default TaskList;
