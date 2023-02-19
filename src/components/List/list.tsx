import React from "react";
import "./style.scss"

function List(){
    const tasks = [{
        taskName: "Watch a course on React - Introduction",
        duration: "02:00:00"
    },
    {
        taskName: "Watch a course on Cypress",
        duration: "03:00:00"
    }
]
    return (
        <aside className="taskList">
            <h2>Current tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="item">
                        <h3>{task.taskName}</h3>
                        <span>{task.duration}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List