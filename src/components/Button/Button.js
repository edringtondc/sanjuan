import React from "react";
import classes from "./button.module.css";

const button = (props) => {

    return (
        <button className={classes.button} onClick={props.link}>{props.text}
        </button>
    )
}

export default button;