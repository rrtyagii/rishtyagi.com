import React, {Component} from 'react'; 
import {Row, Col, Container, Image} from 'react-bootstrap'; 
import SkillBar from 'react-skillbars'; 
// import Button from '@material-ui/core/Button';


import './aboutMe.css';

import ExprienceItemsList from './ExperienceList'

// import img from '../images/IMG_2817.png'; 


const skills = [
    {
        type: "HTML/CSS", 
        level: 85, 
    }, 
    {
        type: "Python", 
        level: 80, 
    }, 
    {
        type: "Django", 
        level: 80, 
    }, 
    {
        type: "Javascript",
        level: 75,
    },
    {
        type: "Node", 
        level: 75, 
    },     {
        type: "ReactJS", 
        level: 74, 
    }, 
    {
        type: "Flask", 
        level: 70, 
    }, 
    {
        type: "Postgres", 
        level: 65, 
    }, 
    {
        type: "MongoDB", 
        level: 65, 
    }, 

]

const colour = {
    bar: '#00a1a7',
    title: {
      text: '#fff',
      background: '#07d4db'
    }
  }

class AboutMe extends Component{
    render(){
        return(
        <section className="AboutMeSection" id='about-me'> 
            <Container>
                <div className="text-center">        
                    <div className="display-4 Heading">
                        <strong>About Me</strong>
                    </div>
                        
                    <div className="">
                        <p className='mb-0'>
                            I am a Computer Science student at <a href="https://www.iit.edu" target="_blank"> <strong>Illinois Tech </strong></a> in Chicago, IL. I am currently interning at <a href="https://www2.deloitte.com/global/en/services/consulting-deloitte.html" target="_blank"> <strong> Deloitte Consulting LLP </strong> </a>.
                        </p>
                        <p className='mb-0'>
                            I like conversations, books, food, among other things.  Most of the time you will see me feeding my curiosity. 
                            {/* <a href="#">Let's Make Something Special.</a>   */}
                        </p>
                    </div>

                    <Row md>
                        <Col md className="columns">
                            <h4 className="">Experience </h4>
                            {/* <ul className="Exprience-ul">
                                <li className="Exprience-li">
                                    <p>Solutions Engineering Intern - Deloitte</p>
                                </li>
                                <li className="Exprience-li">
                                    <p>Software Developer Intern - Ooma</p>

                                </li>
                                <li className="Exprience-li">
                                    <p>Software Developer Intern - 7Qubes</p>
                                </li>
                                <li className="Exprience-li">
                                    <p>Web Developer - Illinois Tech</p>
                                </li>
                            </ul> */}
                            <ExprienceItemsList />
                        </Col>

                        <Col md className="columns">
                            <h4 className="">Skills</h4>
                            <SkillBar skills={skills} colors={colour}/>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section> 
        ); 
    } 
}

export default AboutMe

{/* <Row md className="About-Me-Header">
<Col xs={6} md={4} className="About-Me-Header-Col">
    <Row className="About-Me-Header-Row">
        <Image md={4} src={img} thumbnail />
    </Row>
</Col>

<Col md>
    <div className="text-left">
        <p>
            I am a Computer Science student at <a href="https://www.iit.edu" target="_blank">Illinois Tech</a> in Chicago, IL. I am currently interning at 
            <a href="https://www.ooma.com" target="_blank"> Ooma</a>.
            <br />
            I like conversations, books, food, among other things.  Most of the time you will see me feeding my curiosity. <a href="#">Let's Make Something Special.</a>  
            <br />
        </p>
    </div>

    <Row md>
        <Col md>
            <h4 className="text-center">Experience </h4>
            <ul className="Exprience-ul">
                <li className="Exprience-li">
                    <p>Solutions Engineering Intern - Deloitte</p>
                </li>
                <li className="Exprience-li">
                    <p>Software Developer Intern - Ooma</p>

                </li>
                <li className="Exprience-li">
                    <p>Software Developer Intern - 7Qubes</p>
                </li>
                <li className="Exprience-li">
                    <p>Web Developer - Illinois Tech</p>
                </li>
            </ul>
        </Col>

        <Col md>
            <h4 className="text-center">Skills</h4>

            <SkillBar skills={skills} colors={colour}/>
        </Col>

    </Row>

</Col>
</Row> */}