import React from "react";
import classes from "./Footer.module.css"


const footer = () => {
    return (
        <footer className={classes.footer}>

            <div >
                <ul className={classes.info}>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Home</li>
                    <li>(970) 240-8400</li>
                    <li>164 Colorado Ave, Montrose, CO 81401</li>
                    <li>Schedule link</li>



                </ul>
                
                </div>
            <div>
                <p>Hours:</p>
                <ul className={classes.hours} >
                        <li>
                            Monday: 9:00am - 6:00pm</li>
                        <li>
                            Tuesday: 2:00pm - 8:00pm</li>
                        <li>
                            Wednesday: 9:00am - 6:00pm</li>
                        <li>
                            Thursday: 2:00pm - 8:00pm</li>
                        <li>
                            Friday: 9:00am - 2:00pm</li>
                        <li>
                            Saturday (F/L): 9:00am - 11:00pm</li>
                    </ul>
                    </div>



        </footer>

    )
}
export default footer;