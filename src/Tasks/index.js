import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`list__tasks${task.done && hideDone ? " list__item--hidden" : ""}`}>
                <button className="list__button list__button--done">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`list__item${task.done ? " list__item--done" : ""}`}>
                    {task.content}
                </span>
                <button className="list__button list__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul >
);
export default Tasks;