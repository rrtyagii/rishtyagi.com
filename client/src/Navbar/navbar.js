import React from 'react'; 
import { Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import "./navbar.css"
import image from "../images/letter-r(1).png"
import Pdf from './Tyagi, Rishabh_Chicago_SWE_Resume.pdf';

// function handleClick(){
//     window.open("/Users/rishabhtyagi/Documents/somehting/Tyagi, Rishabh_Chicago_SWE_Resume.pdf", "_blank")
// }
 
const Navbars=() =>{
    return(
        <>
            <Navbar className="navbar" variant="dark" sticky="top">
                <Navbar.Brand className="brand" href='#home'>
                    <img src={image} alt="R logo" className="image d-inlineblock align-top"/>
                    {/* {' '}RT */}
                </Navbar.Brand>  
                <Nav className="mr-auto">
                    <Nav.Link href="#about-me" className="navlink">
                        About Me
                    </Nav.Link>

                    <Nav.Link href='#portfolio' className="navlink">
                        Portfolio
                    </Nav.Link>

                    <Nav.Link className="navlink" href = {Pdf} target = "_blank" >
                        Resume
                    </Nav.Link>

                    {/* <Nav.Link href="#" className="navlink">
                        Contact Me
                    </Nav.Link> */}


                </Nav>    
            </Navbar>
        </>
    ); 
}
        
export default Navbars; 


{/* <div class="icon-bar">
<a class="" href="#"><i class="fa fa-home"></i></a>
<a href="#"><i class="fa fa-search"></i></a>
<a href="#"><i class="fa fa-envelope"></i></a>
<a href="#"><i class="fa fa-globe"></i></a>
<a href="#"><i class="fa fa-trash"></i></a>
</div> */}

            // {/* <header className="header d-flex flex-column justify-content-center">
            //     <nav className="navBar navbar nav-menu">
            //         <ul>
            //             <li>
            //                 <a href="#" className="nav-link active">
            //                     <i className="bx bx-home">
                                  
            //                     </i>
                            
            //                 </a>
            //             </li>
                        
            //             <li>
            //                 <a href="#" className="nav-link">
            //                     <i className="bx bx-user">
                                   
            //                     </i>
                               
            //                 </a>
            //             </li>

            //             <li>
            //                 <a href="#" class="nav-link">
            //                     <i class="bx bx-file-blank">
                                
            //                     </i> 
                              
            //                 </a>
            //             </li>

            //             <li>
            //                 <a href="#" class="nav-link">
            //                     <i class="bx bx-book-content">
                                
            //                     </i> 
                               
            //                 </a>
            //             </li>

            //             <li>
            //                 <a href="#" class="nav-link">
            //                     <i class="bx bx-envelope">
                                
            //                     </i> 
                    
            //                 </a>
            //             </li>

            //         </ul>
            //     </nav>
            // </header> */}
        
        //     <div>
        //     <ul className="nav flex-column">
        //         <li className="nav-item">
        //             <a href="#" className="nav-link">
        //                 <i className="bx bx-home"></i>
        //             </a>
        //         </li>

        //         <li className="nav-item">
        //             <a href="#" className="nav-link">
        //                 <i className="bx bx-user"></i>
        //             </a>
        //         </li>

        //         <li className="nav-item">
        //             <a href="#" className="nav-link">
        //                 <i className="bx bx-book-content"></i>
        //             </a>
        //         </li>

        //         <li className="nav-item">
        //             <a href="#" className="nav-link">
        //                 <i className="bx bx-envelope"></i>
        //             </a>
        //         </li>

        //     </ul>
        // </div>