import React from "react"
import Footer from "./Footer"
import Header from "./Header"
//import MainContent from "./MainContent"
import Jumbotron from "./Jumbotron"
import Cards from "./Cards"
import Slider from "./Slider"
import Team from "./Team"
import Sponsors from "./Sponsors"
import Announcement from "./Announcement"

// Pages:
import About from "./../pages/About"
import SupportUs from "./../pages/SupportUs"

import {
    BrowserRouter as Router, 
    Switch, 
    Route} from 'react-router-dom'
import "../../style.css"


function MyApp(){
    return (
    <Router>
    <div>
    <Header />
        <Switch>
            <Route path="/about-us">
                <About />
            </Route>

            <Route path="/support-us">
                <SupportUs />
            </Route>

            <Route path="/">
                <Announcement />
                <Slider />
                <Cards />
                <Team />
                <Sponsors />
                <Jumbotron />
            </Route>
        </Switch>    
    <Footer />
    </div>
    </Router>
    )
}

export default MyApp