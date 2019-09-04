import React, { Component } from "react";
import Button from "../Button/Button"
import classes from "./Form.module.css"



class Form extends Component {

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form action="https://formspree.io/edringtondc@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Full Name" />
          <input type="email" name="_replyto" placeholder="Your Email"/>
          <input type="text" name="phone" placeholder="Phone Number"/>
          <input type="text" name="message" placeholder="Enter Message Here..."/>
          <Button value="send" text="Submit"></Button>
        </form>
      </div>



    )
  }
}

export default Form;





