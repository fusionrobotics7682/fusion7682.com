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
import "../style.css"


function MyApp(){
    return (
    <div>
    <Header />
    <Announcement />
    <Slider />
    <Cards />
    <Sponsors />
    <Team />
    <Jumbotron />
    <Footer />
    
    
    </div>
    )
}

export default MyApp