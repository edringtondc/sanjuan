import React from "react";
import classes from "./Testimonials.module.css"
import TestimonialCarousel from "../Carousel/Carousel"

const testimonials = () => {
    return (

        <div className={classes.testimonials}>

            <div className={classes.Carousel}>
                <TestimonialCarousel />
            </div>

        </div>
    )
}

export default testimonials;