import React from "react"
import classes from "./main.module.css"
import Logo from "../Logo/Logo"

const main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.Wrapper}>

            <div className={classes.logo}>
                <Logo />
            </div>
            <h1 className={classes.title}> San Juan Chiropractic </h1>
            </div>
           
        </div>
    )
}

export default main;