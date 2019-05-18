import React from "react";
import {Link} from "react-router-dom";
import classes from "./Toolbar.module.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
// import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"


const toolbar = (props) => {
    return (
        <div>

            <header className={classes.Toolbar}>

                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav className={classes.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </header>
        </div>
    )

}

export default toolbar;