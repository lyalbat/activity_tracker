import React from "react";

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
        <aside>
            <h2>Current tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <h3>{task.taskName}</h3>
                        <span>{task.duration}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List