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
    <Container>
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
      In March 2018, as a group of students from Füsun Yönder Anatolian High School, we went to watch the FRC (FIRST Robotics Competition) held in Istanbul Ülker Arena and thus we met with FRC. FRC; FIRST in the USA is an inter-high school robotics competition organized by the Fikret Yuksel Foundation in Turkey, with sponsors such as NASA, BOEING, APPLE. In addition to the prestige of the competition, the communication between the teams we saw in the competition, what our peers could achieve and what FRC could contribute to us. We wanted to be a part of this competition and Mustafa Tekin, our literature teacher at our school, became the leader of our team. We set out with a school that doesn't have a workshop – not even a workshop place -, twenty students who don't know how to make robots but are willing, and a literature teacher who doesn't know about robots but trusts the courage of their students.
      </p>
      </Col>

      <Col xs={12} md={6}>
      <Image src={firstSlide} height={"360px"} width={"100%"} rounded />
      </Col>
      
      <Col xs={12} md={12}>
      <br></br>
      <p>
      First we found an experienced school team at FRC who would teach us how to make robots. Aziz Kılıç and Mustafa Mert Tunali, the university students they graduated from, came to our team as mentors. They opened their workshop for us to learn the process. And they taught the basics of making robots. Thus, we participated in our first competition in Istanbul in March 2019. We reached the quarter-finals with our robot in the 3-day competition and received the Safety Award, one of the prestigious awards of the competition, due to the importance we place on occupational safety. Meanwhile, our school had given us permission to use a rather small space as a workshop. We worked hard as a team and in a year and a half we were able to make robots from scratch, without a workshop or sponsor. We could have done better, it was time to set a new goal.
      The new target is New York... We established our workshop, found sponsors and provided our materials. We arranged our plane tickets and where to stay, but 1 week before the competition, the Covid-19 pandemic process started and we could not participate in the competition. We produced 250 visors that they needed to support healthcare professionals during the pandemic process with our 3D printer and delivered them to healthcare professionals. By participating in 2020 Teknofest, we passed the pre-qualifications and went to Gaziantep. We qualified to be the second in Turkey among 243 teams in the Teknofest 2021 Education Technologies Preliminary Evaluation Report. We participated in the competition for the first time 2 years after the start of the epidemic; We went to the FRC 2022. Volkswagen Arena race with our own robot, new jerseys and new members. Everyone in the stands, on the field and at our stand did their part. We made presentations to the juries, met other teams, applauded our team at the stands, and most importantly, we saw that our robot was working and even autonomous. Of course, there were moments when we could not get the efficiency we wanted from our robot during the competition, but our technical team tried to solve the problems. Thus, we organized a competition for 3 days where we both gained experience and had fun. Then, we participated in the 1Idea 1World competition organized by TÜMMİAD on 16-17 May and we were entitled to receive a bronze medal for our success in our field. In October 2022, we participated in the FRC Pendik Off-Season. We made presentations to the juries, cheered for our team in the stands, met other teams and supported each other. Most importantly, we saw how much we improved our robot. Together with our alliances, we became champions and deserved the Winner award. Now Teknofest 2023, FRC 2023, many off-season competitions and fairs are waiting for us. In addition, we continue our trainings, seminars and learning while having fun.
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