import React, {Component} from 'react'; 
// import { Container, Row, Col } from 'react-bootstrap';
// import { Box, Container,Row, Column, FooterLink, Heading} from "./footer_style"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component{
  render(){
    return(
      <footer className="page-footer font-small elegant-color-dark darken-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5">
              <div className="mb-5 flex-center">  

                <a className="fb-ic" href='https://github.com/rrtyagii'>
                  <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                
                <a className="tw-ic" href='https://twitter.com/AllAuover'>
                  <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                
                {/* <a className="gplus-ic">
                  <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a> */}
                
                <a className="li-ic" href='https://www.linkedin.com/in/rtyagi1/'>
                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                
                <a className="ins-ic" href='https://www.instagram.com/rish.jpeg/'>
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                
                <a className="email-ic" href="mailto:rtyagi1@hawk.iit.edu">
                  <i className="fa-solid fa-envelope white-text fa-2x"> </i>
                </a>
                
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-copyright text-center py-3">&copy; {new Date().getFullYear()} Copyright:
          <a href="https://www.rishtyagi.com"> Rishabh Tyagi</a>
        </div>

      </footer>
    ); 
  }
}

export default Footer