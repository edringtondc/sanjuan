import React from "react"
import classes from "./NavigationItems.module.css"
import NavigationItem from "./NavigationItem/NavigationItem"

const navigationItems =()=>(
<ul className={classes.NavigationItems}>
    <NavigationItem link="/Team">Our Practitioners</NavigationItem>
    <NavigationItem link="/Treatments">Treatments</NavigationItem>
    <NavigationItem link="/AutoAccidents">Auto Accidents</NavigationItem>
    {/* <a href="https://clients.mindbodyonline.com/ASP/adm/adm_appt_search.asp?studioid=591688&tg=&view=&sSU=&qParam=&lvl=&catid=&prodid=&date=6%2F4%2F2019&classid=0&trn=0&stype=-9&loc=">Schedule Now</a> */}
    <NavigationItem>Schedule Now</NavigationItem>
    <NavigationItem link="/Visit">Location/Hours</NavigationItem>
    <NavigationItem link="/Contact">Contact Us</NavigationItem>
    <NavigationItem link="/Home" active>Home</NavigationItem>

    {/* <NavigationItem link="/">Testimonials</NavigationItem>
    <NavigationItem link="/">Location</NavigationItem>
    <NavigationItem link="/">Contact</NavigationItem> */}

</ul>
)

export default navigationItems;

