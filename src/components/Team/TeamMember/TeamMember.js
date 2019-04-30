import React from "react"
import classes from "./teamMember.module.css"



const teamMember = props => {
    return (
   



        <div className={classes.member}>
            <h3>{props.provider}</h3>
            <h4>{props.title}</h4>
            <p>img goes here</p>
            <p>{props.about}</p>
        </div>
    )
}

export default teamMember;