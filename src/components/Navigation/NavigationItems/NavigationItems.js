import React from "react"
import classes from "./NavigationItems.module.css"
import NavigationItem from "./NavigationItem/NavigationItem"

// import { Link } from "react-router-dom"

const navigationItems =()=>(
<ul className={classes.NavigationItems}>
    <NavigationItem link="/Team">Our Practitioners</NavigationItem>
    <NavigationItem link="/Rates#RatesWrapper">Rates</NavigationItem>
    <NavigationItem link="/Treatments#space">Treatments</NavigationItem>
    <NavigationItem link="/AutoAccidents#AutoWrapper">Auto Accidents</NavigationItem>
    <NavigationItem link="/Home#Visit">Location/Hours</NavigationItem>
    <NavigationItem link="/Home#Contact">Contact Us</NavigationItem>
    <NavigationItem link="/Home#top">Home</NavigationItem>

    {/* <NavigationItem link="/">Testimonials</NavigationItem>
    <NavigationItem link="/">Location</NavigationItem>
    <NavigationItem link="/">Contact</NavigationItem> */}

</ul>
)

//<button><Link to="/" params={this.props.git_url}></Link>Redirect to repo: {repo.git_url}</button>

export default navigationItems;

