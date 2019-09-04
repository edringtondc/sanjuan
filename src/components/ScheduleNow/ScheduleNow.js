import React from "react"
import classes from "./ScheduleNow.module.css"
import Button from "../Button/Button"

const ScheduleNow = () => {

  return (
    <div className={classes.scheduleBlock}>

      <div className={classes.textBlock}>
      <h1 className={classes.title}>The Wellness Center at San Juan Chiropractic</h1>
        
        <p className={classes.description}>Ice cream ice cream marzipan cake gummi bears bear claw pie lemon drops halvah. Jelly cookie lemon drops jelly sweet roll tart. Danish soufflé croissant tootsie roll donut powder candy.

        Cupcake halvah jujubes powder carrot cake ice cream. Croissant soufflé macaroon sugar plum jelly beans. Cake gummies lollipop soufflé jelly chupa chups chupa chups.</p>

        <p className={classes.description}>Chocolate bar jelly jelly-o cookie chocolate marshmallow jelly-o. Bear claw liquorice carrot cake pastry jelly beans gummi bears lollipop tootsie roll jelly. Sweet caramels topping apple pie.</p>
        <Button text={"Schedule Now"} link={"https://clients.mindbodyonline.com/ASP/adm/adm_appt_search.asp?studioid=591688&tg=&view=&sSU=&qParam=&lvl=&catid=&prodid=&date=5%2F10%2F2019&classid=0&loc=1&trn=0&stype=-9&vt=&justloggedin=&pMode=0&page=&prodGroupId=&optForwardingLink=&nLgIn="} />
      </div>
   
    




    </div>
  )
}

export default ScheduleNow;