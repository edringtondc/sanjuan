import React from "react"
import classes from "./main.module.css"
import Logo from "../Logo/Logo"

const main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.logo}>
                <Logo />
            </div>
        </div>
    )
}

export default main;