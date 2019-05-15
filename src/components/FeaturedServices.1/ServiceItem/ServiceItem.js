import React from "./node_modules/react"
import classes from "./ServiceItem.module.css"

const serviceItem = (props) => {
    return (
        <div className={classes.Service}>
            {props.title}
        </div>
    )
}

export default serviceItem;