import React from "react";
import classes from "./treatmentToolbar.module.css"
import ToolbarItems from "./ToolbarItems/ToolbarItems"
import NavigationItem from "../../../components/Navigation/NavigationItems/NavigationItem/NavigationItem.js"
const TreatmentToolbar = (props)=> {
    return (
        <div className={classes.Toolbar}>
            {props.treatments.map(treatment => {
               return  <NavigationItem link={treatment.title}>{treatment.title}</NavigationItem>
            })}
            
        </div>
    )
}

export default TreatmentToolbar;