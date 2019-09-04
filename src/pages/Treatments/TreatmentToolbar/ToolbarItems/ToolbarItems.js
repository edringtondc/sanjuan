import React from "react";
import classes from "./toolbarItems.module.css"

const ToolbarItems = (props) => {
    return (
       <div>
           {props.treatments.map(treatment => {
               return <a className={classes.Link}>{treatment.title}</a>
           })}
       </div>
    )

}

export default ToolbarItems;