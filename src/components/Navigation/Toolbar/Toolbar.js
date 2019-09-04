import React from "react";
import {Link} from "react-router-dom";
import classes from "./Toolbar.module.css"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
// import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"


const toolbar = (props) => {
    return (
        <div>

            <div className={classes.Toolbar}>

                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav className={classes.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </div>
        </div>
    )

}

export default toolbar;