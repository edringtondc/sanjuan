import React from "react"
import classes from "./NavigationItems.module.css"
import NavigationItem from "./NavigationItem/NavigationItem"

const navigationItems =()=>(
<ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Welcome</NavigationItem>
    <NavigationItem link="/">About Us</NavigationItem>
    <NavigationItem link="/">New Patients</NavigationItem>
    <NavigationItem link="/">Featured Services</NavigationItem>
    <NavigationItem link="/">Testimonials</NavigationItem>
    <NavigationItem link="/">Rates</NavigationItem>
    <NavigationItem link="/">Location</NavigationItem>
    <NavigationItem link="/">Contact</NavigationItem>

</ul>
)

export default navigationItems;