import React, {Component} from "react";
// import Layout from "../../Layout/Layout";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar.js"
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact"
// import Main from "../components/Main/Main"
import ScheduleNow from "../../components/ScheduleNow/ScheduleNow"
// import Testimonials from "../components/Testimonials/Testimonials"
import Visit from "../../components/Visit/Visit"
import Footer from "../../components/Footer/Footer"
import MainMenu from "../../components/MainMenu/MainMenu"
import classes from "./Home.module.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"


class Home extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
    
        this.setState((prevState) => {
            return {showSideDrawer:  !prevState.showSideDrawer};
        } );
    }

    render() {
        return (
            <div id="top" className={classes.home}>
                      <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                           <SideDrawer
                                open={this.state.showSideDrawer}
                                closed={this.sideDrawerClosedHandler}
                                 />
                        <Banner title= "San Juan Chiropractic" />
                        <MainMenu></MainMenu>
                        <ScheduleNow/>
                        <Visit/>
                        <Contact/>
                    
                        <Footer/>
            
                
            </div>
        )
    }

}

// const Home = () => {
//     return (
//         <div id="top" className={classes.home}>
//            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
//                 <SideDrawer
//                     open={this.state.showSideDrawer}
//                     closed={this.sideDrawerClosedHandler}
//                      />
//             <Banner title= "San Juan Chiropractic" />
//             <MainMenu></MainMenu>
//             <ScheduleNow/>
//             <Visit/>
//             <Contact/>
          
//             <Footer/>

    
//         </div>

//     )
// }

export default Home;