import React from "react"
import classes from "./ScheduleNow.module.css"
import picture from "../../assets/images/neck.jpeg"

const ScheduleNow = () => {

    return (
        <div className={classes.featured}>
          <h1>Schedule Now</h1>

          <img src={picture} alt="schedule now"/>


        </div>
    )
}

export default ScheduleNow;