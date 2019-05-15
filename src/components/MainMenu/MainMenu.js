import React from "react";
import MenuItems from "./MenuItems/MenuItems"
import classes from "./mainMenu.module.css"
import Aux from "../../hoc/Aux/Aux"
import teamIcon from "../../assets/icons/team.png"
import spaIcon from "../../assets/icons/spa.png"
import carIcon from "../../assets/icons/car-collision.png"






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

            <MenuItems item="Team Members" icon={teamIcon} />
            <MenuItems item="Treatments"  icon={spaIcon}/>
            <MenuItems item="Auto Accidents" icon={carIcon}/>

        </div>
    )
}

export default team;