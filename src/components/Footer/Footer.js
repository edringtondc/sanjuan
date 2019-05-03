import React from "react";
import classes from "./Footer.module.css"
import Form from "../Form/Form"

const footer = () => {
    return (
        <footer className={classes.footer}>
            <div>    <Form /></div>
            <div className={classes.info}><ul>Hours
           <li>MON</li>
                <li>Tues</li>
                <li>Weds</li>
                <li>Thurs</li>
                <li>Friday</li>
                <li>Saturday</li>

            </ul></div>


        </footer>

    )
}
export default footer;