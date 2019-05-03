import React from "react";
import classes from "./Visit.module.css"
import Map from "../../assets/images/google.png"

const visit = () => {
    
    return (
        <div className={classes.visit}>
        <div className={classes.map}>  <img src={Map} className={classes.map}></img> </div>
      
     
       
    </div>
    )
    
}

export default visit;