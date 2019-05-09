import React from "react"
import classes from "./NavigationItems.module.css"
import NavigationItem from "./NavigationItem/NavigationItem"

const navigationItems =()=>(
<ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Welcome</NavigationItem>
    <NavigationItem link="/">Main Menu</NavigationItem>
    <NavigationItem link="/">Schedule Now</NavigationItem>
    <NavigationItem link="/">Testimonials</NavigationItem>
    <NavigationItem link="/">Location</NavigationItem>
    <NavigationItem link="/">Contact</NavigationItem>

</ul>
)

export default navigationItems;