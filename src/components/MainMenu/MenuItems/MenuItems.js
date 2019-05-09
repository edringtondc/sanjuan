import React from "react"
import classes from "./menuItems.module.css"



const menuItem = props => {
    return (
   
        <div className={classes.item}>
           img goes here
           {props.item}
        </div>
    )
}

export default menuItem;