import React from "react"
import ServiceItem from "./ServiceItem/ServiceItem"
import classes from "./FeaturedServices.module.css"

const featuredServices = () => {

    const services = [
        {
            title: "Chiropractic",
        },
        {
            title: "Acupuncture",
        },
        {
            title: "Myo-fascial Release",
        },
        {
            title: "Cupping",
        },
        {
            title: "Biofeedback",
        },
        {
            title: "Cranial Sacral Therapy",
        },
    ]
    return (
        <div className={classes.featured}>
            {services.map(service => {
               return <ServiceItem title={service.title} />
            })}
        </div>
    )
}

export default featuredServices;