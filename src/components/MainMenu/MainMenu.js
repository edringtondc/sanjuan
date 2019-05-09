import React from "react";
import MenuItems from "./MenuItems/MenuItems"
import classes from "./mainMenu.module.css"
import Aux from "../../hoc/Aux/Aux"

const team = () => {
    const teamData = [
        {   
            headline: "Dr. Darrin",
            provider: "Darrin Robertson, D.C., C.C.S.P.",
            title: "San Juan Chiropractic, LLC, owner"
        },

        {
            headline: "Dr. Tori",
            provider: "Victoria Bourgeois Stegmann, D.C., CAc",
            title: "Back to Balance, LLC, owner"
        },
        {
            headline: "Dr. Mandy",
            title: "Chiropractor"
        },
        {
            headline: "Dr. Drew",
            title: "Chiropractor"
        },
        {
            headline: "Ted",
            title: "NCTMB"
        },
        {
            headline: "Michaela",
            title: "Massage Therapy"
        },
        {
            headline: "Porsche",
            title: "BioFeedback"
        },
    ]

    return (



        <div className={classes.menuBlock} >

            <h2 className={classes.headline}>Main Menu</h2>
            
          <MenuItems item="Team Members"/>
          <MenuItems item="Treatments"/>
          <MenuItems item="Auto Accidents"/>
          <MenuItems item="Rates"/>





        </div>
    )
}

export default team;