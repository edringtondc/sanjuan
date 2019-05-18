import React from "react"
import classes from "./NavigationItems.module.css"
import NavigationItem from "./NavigationItem/NavigationItem"

const navigationItems =()=>(
<ul className={classes.NavigationItems}>
    <NavigationItem link="/Home" active>Home</NavigationItem>
    <NavigationItem link="/Team">Team</NavigationItem>
    <NavigationItem link="/Treatments">Treatments</NavigationItem>
    {/* <NavigationItem link="/">Testimonials</NavigationItem>
    <NavigationItem link="/">Location</NavigationItem>
    <NavigationItem link="/">Contact</NavigationItem> */}

</ul>
)

export default navigationItems;