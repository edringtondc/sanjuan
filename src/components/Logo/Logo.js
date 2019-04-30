import React from "react"
import classes from './Logo.module.css'
import burgerLogo from '../../assets/images/sanjuan.png'
const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="San Juan Chiropractic"/>
    </div>
)

export default logo;