import React from "react";
import classes from "./Form.module.css"

const form = () => {
    return (
        <div className="container">
        <form >
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

        <label for="message">Message</label>
          <textarea id="message" name="message" row="30" column="100" placeholder="Enter Message Here..." /> 
          
        
          <input type="submit" value="Submit"/>
        </form>
      </div>

    )
}

export default form;