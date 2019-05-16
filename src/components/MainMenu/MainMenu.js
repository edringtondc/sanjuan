import React from "react";
import MenuItems from "./MenuItems/MenuItems"
import classes from "./mainMenu.module.css"
import Aux from "../../hoc/Aux/Aux"
import teamIcon from "../../assets/icons/team-white.png"
import spaIcon from "../../assets/icons/spa-white.png"
import carIcon from "../../assets/icons/car-collision-white.png"






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
     <div className={classes.Wrapper}>
  <div className={classes.menuBlock} >

<MenuItems item="Team Members" id="first" icon={teamIcon} />
<MenuItems item="Treatments" id="middle" icon={spaIcon} />
<MenuItems item="Auto Accidents" id="third" icon={carIcon} />

</div>
     </div>
     
          
      

    )
}

export default team;