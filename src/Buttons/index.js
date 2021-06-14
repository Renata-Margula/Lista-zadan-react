import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    tasks.length > 0 && (
        <span className="section__button">
            <button className="section__button section__button--header">
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button className="section__button section__button--header"
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
        </button>
        </span>
    )
);

export default Buttons;