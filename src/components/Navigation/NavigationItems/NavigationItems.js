import React from "react"
import classes from "./NavigationItems.module.css"
import NavigationItem from "./NavigationItem/NavigationItem"

const navigationItems =()=>(
<ul className={classes.NavigationItems}>
    <NavigationItem link="/Team">Our Practitioners</NavigationItem>
    <NavigationItem link="/Treatments">Treatments</NavigationItem>
    <NavigationItem link="/Contact">Contact Us</NavigationItem>
    <NavigationItem link="/Schedule">Schedule Now</NavigationItem>
    <NavigationItem link="/Vist">Location/Hours</NavigationItem>
    <NavigationItem link="/AutoAccidents">Auto Accidents</NavigationItem>
    <NavigationItem link="/Home" active>Home</NavigationItem>

    {/* <NavigationItem link="/">Testimonials</NavigationItem>
    <NavigationItem link="/">Location</NavigationItem>
    <NavigationItem link="/">Contact</NavigationItem> */}

</ul>
)

export default navigationItems;