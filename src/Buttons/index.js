import React from "react";
import { Span, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <Span>
            <Button
                onClick={toggleHideDone}
            >
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </Button>
            <Button
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </Button>
        </Span>
    )
);

export default Buttons;