import React from "react"
import classes from "./menuItems.module.css"
// import icon from "../../../assets/icons/spine.png"



const menuItem = props => {
    return (
   
        <div className={classes.item}>
          <a href={props.Link}><img className={classes.Icon} src={props.icon} alt={props.item}/></a> 
            <p> {props.item}</p> 
        </div>
    )
}

export default menuItem;