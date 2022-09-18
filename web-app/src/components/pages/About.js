import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import "../../style.css"


const firstSlide = require("../../assets/team_photo.jpg");

function aboutUs(){
  const jumbotronStyles = {
    backgroundColor: "#10375c",
    color: "#ffffff",


    }

    return(
      <div>
    <Container fluid>
      <Jumbotron fluid style={jumbotronStyles}>
      
        <h1 className="text-center">About Us</h1>
      </Jumbotron>
    </Container>


    <Container>
      <Row>
        
      <Col xs={12} md={6}>
      <h1 style={{color:"#10375c"}}>
        Who Are We?
      </h1>
      <p>
      In 2018, we went to watch the FRC robot competition held in Istanbul Ulker Arena with a group of students from Fusun Yonder Anatolian High School. FRC (FIRST Robotics Competition) is an international robotics competition organized by the FIRST foundation between the teams of students between 15-18 December every year. We were very impressed to see how the teams communicated with each other and what our peers could do in the competition. And we wanted to take part in this competition. We started off with enthusiastic students who don't know how to make robots in a school without a workshop, and a literature teacher who has no idea about robots... 
      We found an experienced FRC school team to teach us how to make robots. Graduated university students Mustafa Mert Tunalı and Aziz Kılıç came to our team as technical mentors. They opened their workshop and taught us the basics of making obots so that we could learn the process. Thus, we established our team in 2018. 
      </p>
      </Col>

      <Col xs={12} md={6}>
      <Image src={firstSlide} height={"360px"} width={"100%"} rounded />
      </Col>
      
      <Col xs={12} md={12}>
      <br></br>
      <p>
      We participated in our first competition in Istanbul in March 2019. We reached the quarter-finals with our robot in the 3-day competition and won the Safety Award 2019, one of the prestigious awards, due to the importance we place on occupational safety. After the competition, we worked harder as a team and in a year and a half we were able to make robots from scratch. We could have done better, we should have set a new goal. New destination New York... 

  

We set up our workshop, found sponsors and provided our materials. We have arranged our plane tickets and where we will stay, but 1 week before the competition, the Covid-19 pandemic process started and we could not participate in the competition. We produced 250 visors that they needed to support healthcare professionals during the pandemic process with our 3D printer and delivered them to healthcare professionals. We participated in 2020 Teknofest and passed the pre-qualifications and went to Gaziantep. We qualified to be the second in Turkey among 243 teams at the stage of the Teknofest 2021 Educational Technologies Preliminary Evaluation Report. 

  

We participated in the competition for the first time 2 years after the start of the epidemic; We went to the FRC 2022. Volkswagen Arena race with our own robot, new jerseys and new members. Everyone in the stands, on the field and at our stand took responsibility for their duties. We made presentations to the juries, met other teams, applauded our team in the stands, and most importantly, we saw that our robot was working and even autonomous. Of course, there were moments when we could not get the efficiency we wanted from our robot during the competition, but our technical team tried to solve the problems. Thus, we held a competition for 3 days in which we both gained experience and had fun. 

  

Then, we participated in the 1Idea 1World competition organized by TUMMIAD on 16-17 May. We exhibited our robot and introduced our team in the competition with international participants. We won a bronze medal for our success in our field. Now Teknofest 2022, FRC 2023, many off-season competitions and fairs are waiting for us. In addition, we continue our trainings, seminars and learning while having fun.
      </p>

      <hr style={{backgroundColor:"#10375c"}}></hr>
      </Col>
      </Row>
      </Container>
      <br></br>
    </div>

    )
}

export default aboutUs;