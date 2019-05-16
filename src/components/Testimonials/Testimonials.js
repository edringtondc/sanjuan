import React from "react";
import classes from "./Testimonials.module.css"
import TestimonialCarousel from "../Carousel/Carousel"

const testimonials = () => {
    return (

        <div className={classes.testimonials}>
            <h3 className={classes.Title}>Words From Our Clients!</h3>
            <div className={classes.Carousel}>
                <TestimonialCarousel />
            </div>

        </div>
    )
}

export default testimonials;