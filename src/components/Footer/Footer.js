import React from "react";
import classes from "./Footer.module.css"
import Form from "../Form/Form"

const footer = () => {
    return (
        <footer className={classes.footer}>

            <div className={classes.info}>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Home</li>
                    <li>Locations</li>

                </ul></div>


        </footer>

    )
}
export default footer;