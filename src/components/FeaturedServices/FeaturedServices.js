import React from "react"
import ServiceItem from "./ServiceItem/ServiceItem"
import classes from "./FeaturedServices.module.css"

const featuredServices = () => {
    return (
        <div className={classes.featured}>
           <ServiceItem/>
           <ServiceItem/>
           <ServiceItem/>
           <ServiceItem/>
           <ServiceItem/>
        </div>
    )
}

export default featuredServices;