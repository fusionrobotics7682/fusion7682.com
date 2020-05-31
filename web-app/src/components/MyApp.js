import React from "react"
import Footer from "./Footer"
import Header from "./Header"
//import MainContent from "./MainContent"
import Jumbotron from "./Jumbotron"
import Cards from "./Cards"
import Slider from "./Slider"
import "../style.css"


function MyApp(){
    return (
    <div>
    <Header />
    <Slider />
    <Cards />
    <Jumbotron />
    <Footer />
    
    
    </div>
    )
}

export default MyApp