import React from 'react'; 
import useRef from 'react'; 
import Typical from 'react-typical'; 
import '@fontsource/roboto'; 
import Button from '@material-ui/core/Button';
import PartcileBackground from './particles';
import Link from 'react-scroll'; 

// import {options} from './particles'

import './style.css';
import '../../node_modules/tsparticles/'
import rishabh_photo from '../images/DSC_7701.jpg';

function Home() {
  return (
    <section id='home'>
      {/* <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded}/> */}
      <PartcileBackground />
      <div className="Home">
        <header className="Home-header">
          {/* <div>
            <img src={rishabh_photo} alt="Hi, meet Rishabh!" className='photo' />
          </div>
            <br /> */}
          <p>
            Hello, This is <span className="Rishabh_Tyagi"> Rishabh Tyagi</span>.
            <br/>
            I am <Typical 
                className="Rishabh_Tyagi"
                loop={Infinity}
                wrapper="b"
                steps ={[
                  'a Student.', 5000, 
                  'a Developer.', 5000,
                  'a Writer.', 5000, 
                  'an Actor.', 5000,
                  'a Movie Buff.', 5000
                ]}    
            /> 
          </p>
          
          <Button 
            href="#portfolio"
            style={{
              borderRadius: 35,
              borderColor: 'yellow',
              // backgroundColor: "#21b6ae",
              padding: "18px 36px",
              fontSize: "18px",
              color: 'yellow', 
              margin: '20px 10px'
            }} 
            variant="outlined" size="large" color= 'secondary'>
            View My Work
          </Button>

        </header>
      </div>
    </section>
  );
};

export default Home;
