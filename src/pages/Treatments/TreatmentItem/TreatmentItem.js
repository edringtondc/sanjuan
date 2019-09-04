import React from "react";
import classes from "./treatmentItem.module.css";

const TreatmentItem = (props) => {

   
    return (
        <div className={classes.Wrapper} >


            <div className={classes.treatmentItem}>
                <h3 className={classes.Title}>{props.title}</h3>
                
                <div className={classes.Treatment}>

                    
                    <p className={classes.Description}> {props.description}
                </p>
                </div>
            </div>
        </div>
    )
}



export default TreatmentItem;



