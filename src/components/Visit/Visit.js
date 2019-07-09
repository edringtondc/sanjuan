import React from "react";
import classes from "./Visit.module.css"


const visit = () => {

    return (



        <div className={classes.wrapper} id="Visit">
            <div className={classes.empty}>

            </div>

            <div className={classes.visit}>


                <div className={classes.info}>

                    <h3 className={classes.hoursTitle}>Wellness Center Info</h3>
                    <h4 className={classes.phone}>(970) 240-8400</h4>

                    <ul className={classes.hours}>
                        <li>
                            Monday: 9:00am - 6:00pm
                    </li>
                        <li>
                            Tuesday: 2:00pm - 8:00pm
                    </li>
                        <li>
                            Wednesday: 9:00am - 6:00pm
                    </li>
                        <li>
                            Thursday: 2:00pm - 8:00pm
                    </li>
                        <li>
                            Friday: 9:00am - 2:00pm
                    </li>
                        <li>
                            Saturday (F/L): 9:00am - 11:00pm
                    </li>
                    </ul>
                </div>
                <div className={classes.map}>
           
                 
                

                    <iframe title="location" className={classes.map} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12494.954869725958!2d-107.8709987!3d38.470593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c28b59f1de75013!2sSan+Juan+Chiropractic!5e0!3m2!1sen!2sus!4v1558043064832!5m2!1sen!2sus" allowFullScreen></iframe>
                </div>
            </div>
        </div >
    )

}

export default visit;