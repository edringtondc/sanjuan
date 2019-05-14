import React from "react";
import classes from "./Testimonials.module.css"
import TestimonialCarousel from "../Carousel/Carousel"

const testimonials = () => {
    return (

        <div className={classes.testimonials}>
            <h3>Testimonials</h3>
            <TestimonialCarousel/>
          
        </div>
    )
}

export default testimonials;