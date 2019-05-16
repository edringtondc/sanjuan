import React from "react";
import classes from "./Visit.module.css"
import Map from "../../assets/images/SJCMap.png"
import Balance from "../../assets/images/balancerocks.jpg"

const visit = () => {

    return (



        <div className={classes.wrapper}>
            <div className={classes.empty}>

            </div>

            <div className={classes.visit}>


                <div className={classes.info}>

                    <h3 className={classes.hoursTitle}>Wellness Center Hours</h3>
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
                    <h3 className={classes.hoursTitle} > Location </h3>
                    <p>
                    164 Colorado Avenue, Unit C
                    Montrose, CO 81401</p>
                    <a href="https://www.google.com/maps/place/San+Juan+Chiropractic/@38.470593,-107.8709987,15z/data=!4m5!3m4!1s0x0:0x5c28b59f1de75013!8m2!3d38.470592!4d-107.870983"
                        target="_blank" rel="noopener noreferrer" >
                        <img src={Map} className={classes.map} alt="map of SJC" />
                    </a>
                </div>
            </div>
        </div >
    )

}

export default visit;