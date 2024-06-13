import React from 'react';
import './Task.css';

function Task({ task }) {
    return (
        <div className="task">
            {task}
        </div>
    );
}

export default Task;
