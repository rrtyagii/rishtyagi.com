import React from 'react'; 
import {Card,Container} from 'react-bootstrap';
import { portfolio_data } from './portfolio_data';


import './portfolio.css'; 

function Portfolio(){    
    return(
        <section id='portfolio'
        style={{
            background: '#d9d9d9',
        }}
        >
            <div className="display-4 text-center">
                <strong>Portfolio</strong>
            </div>

            <Container className="portfolioSection d-flex flex-row justify-content-center">
                {
                    portfolio_data.map((element)=>{
                        return(
                            <div className="d-flex justify-content-center">
                                <Card className="mb-2"
                                key={element.id}
                                bg={element.variant}
                                text={element.variant.toLowerCase() === 'light' ? 'dark' : 'white'} 
                                > 
                                    <Card.Body key={element.id}>
                                        <Card.Img src={element.icon} variant="top" href={element.link}/>
                                        <Card.Title>{element.title}</Card.Title>
                                            <Card.Text
                                                style={{color: 'white',}}
                                            >
                                                {element.description}
                                            </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Card.Link 
                                            style={{
                                                textDecoration: 'none', 
                                                color: 'white', 
                                            }}
                                            text={element.variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                            href={element.link}  
                                        >
                                            Learn More
                                        </Card.Link>
                                    </Card.Footer>
                                </Card>
                            </div>
                        ); 
                    })
                }
            </Container>
            {/* <Row md className="text-center">{                 */}
        {/* </Row> */}
        </section>
    ); 
}; 

export default Portfolio; 

    // <div className="card text-center">
    //     <div className="card-body">
    //         <h5 className="card-title">
    //             Project 1
    //         </h5>
    //         <p className="card-text">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nihil! Lorem ipsum dolor sit amet.
    //         </p>
    //         <button type="button" className="btn btn-primary">Learn More</button>
    //     </div>
    // </div>
