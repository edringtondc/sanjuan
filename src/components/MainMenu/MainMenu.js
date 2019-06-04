import React from "react";
import MenuItems from "./MenuItems/MenuItems"
import classes from "./mainMenu.module.css"

import teamIcon from "../../assets/icons/team.png"
import spaIcon from "../../assets/icons/spa.png"
import carIcon from "../../assets/icons/car-collision.png"







const menu = () => {
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

export default menu;