import React from "react";
import "./style.css";

const Container = (props) => (
    <body className="container">
        {props.children}
    </body>
);

export default Container;
