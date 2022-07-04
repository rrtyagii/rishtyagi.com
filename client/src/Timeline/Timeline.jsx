import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'; 
import 'react-vertical-timeline-component/style.min.css'; 

import './timeline.css';

// import { ReactComponent as WorkIcon } from '../images/work.svg';
// import {FaTv, FaGraduationCap, FaRegMoneyBillAlt} from 'react-icons/fa'; 

import { timeline_Elements } from './timelineElement';

// import {ReactComponent as WorkIcon} from '../images/portfolio.png'; 

const TimelineComp=()=>{
    let workIconStyles={
        background: 'rgb(33, 150, 243)', 
        color: '#fff', 
    }
    let schoolIconStyles={
        background: 'rgb(233, 30, 99)', 
        color: '#fff', 
    }

    return(
        <section>
            <div className="timelineSection">
                <h1 className="title">TIMELINE</h1>
                <VerticalTimeline animate={true} lineColor={'#000'}>
                    {
                        timeline_Elements.map ((element)=>{
                            let isWorkIcon = element.type === "internship"; 
                            return(
                                <VerticalTimelineElement
                                    // className={isWorkIcon? "vertical-timeline-element--work": "vertical-timeline-element--education"}
                                    key={element.id}
                                    date={element.date}
                                    dateClassName="date"
                                    iconStyle={isWorkIcon? workIconStyles : schoolIconStyles}
                                    icon={element.icon}
                                >
                                        <h5 className="vertical-timeline-element-title">{element.title}</h5>
                                        <h6 className="vertical-timeline-element-subtitle">{element.company}</h6>
                                        {/* <h6 className="vertical-timeline-element-subtitle">{element.location}</h6> */}
                                        <p>
                                            {element.description}
                                        </p>
                                </VerticalTimelineElement> 
                                
                                
                            );
                        })
                    }
                </VerticalTimeline>
            </div>
        </section>
    ); 
}

export default TimelineComp; 