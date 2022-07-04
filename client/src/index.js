import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//  import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './HomePage/Home';
// import Contact from './Contact/Contact';
import AboutMe from './AboutMe/aboutme';
import Portfolio from './Portfolio/portfolio';
import Footer from './Footer/footer'
import Navbars from './Navbar/navbar';
import TimelineComp from './Timeline/Timeline';

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Home />
    <Navbars/>
    <AboutMe />
    <Portfolio />
    <TimelineComp />
    {/* <Contact /> */}
    <Footer />
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
