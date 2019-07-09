import React from "react";
import classes from "./button.module.css";

const button = (props) => {

    

    return (
        <button className={classes.button} onClick={props.click} >
            {props.text}
        </button>
    )
}

export default button;