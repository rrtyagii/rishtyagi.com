import React, {useState} from 'react'; 
// import { makeStyles } from '@material-ui/core';
// import { FormControl, TextField } from '@material-ui/core';
import '@fontsource/roboto'; 
import Button from '@material-ui/core/Button';

import './contact.css'; 

class Contact extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      name: '',
      subject: '',
      email: '', 
      message: ''
    }
  }

  onNameChange(event){
    this.setState({name: event.target.value})
  }

  onSubjectChange(event){
    this.setState({subject: event.target.value})
  }

  onEmailChange(event){
    this.setState({email: event.target.value})
  }

  onMessageChange(event){
    this.setState({message: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault(); 
    // console.log(this.state);

    fetch('https://localhost:3002/send', {
      method: "POST",
      body: JSON.stringify(this.state),
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(
      (response) => (response.json())
    ).then(
      (response)=>{
        if (response.status === 'success'){
          alert("Message Sent. ");
          this.resetForm()
        }
        else if (response.status === 'fail'){
          alert("Message failed to send.")
        }
      })
  }

  resetForm(){
    this.setState({
      name:'',
      subject:'',
      email:'',
      message:''
    })
  }

  render(){
    return(
        <div className="MainForm">
          <form id='contact-form' action="/" method='POST' onSubmit={this.handleSubmit.bind(this)}>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="form-control" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail">Email</label>
              <input type="email" className="form-control" aria-describedby='emailHelp' value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea rows="5" className="form-control" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            {/* <Button style={{
                            borderRadius: 35,
                            borderColor: 'yellow',
                            // backgroundColor: "#21b6ae",
                            padding: "18px 36px",
                            fontSize: "18px",
                            color: 'yellow', 
                            margin: '20px 10px'
                          }} 
              variant="outlined" size="large" color= 'secondary'>
              Submit
            </Button> */}

          </form>
        </div>
    );
  }
}

export default Contact; 
// function Contact(){
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState(''); 
//   const [subject, setSubject] = useState(''); 
//   const [message, setMessage] = useState('');  

//   const handleSubmit = (e) =>{
//     // e.preventDefault(); 
    
//     const contactMessage = {name, email, subject, message}; 

//     console.log(contactMessage); 
//   }; 
  
//   return(
//     <section className='sectionHeading'>
  
//       <div className='container'> 

//         <div className="display-4">
//           Contact Me
//         </div>

//         <form onSubmit={handleSubmit}>

//           <div className="form-row">
//             <div className="form-group col-md-6">
//               <input 
//               type="text" 
//               className="form-control transparent-input" placeholder='Name' 
//               value={name}
//               onChange={(e)=>setName(e.target.value)}
//               required/>
//             </div>

//             <div className="form-group col-md-6">
//               <input 
//               type="email" 
//               className="form-control transparent-input" placeholder='Email' 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required/>
//             </div>
//           </div>

//           <div className="form-group">
//             <input 
//             type="text" className="form-control transparent-input" 
//             placeholder='Subject' 
//             value={subject}
//             onChange={(e)=>setSubject(e.target.value)}
//             required/>
//           </div>

//           <div className="form-group">
//             <textarea 
//             className="form-control transparent-input" 
//             name="messageTextArea" id="messageTextAreaID" 
//             value={message}
//             onChange={(e)=>setMessage(e.target.value)}
//             placeholder="Message" cols="20" rows="10" required></textarea>
//           </div>

//           {/* <button className='btn btn-warning btn-lg'>Submit</button> */}
//           <Button 
//             style={{
//               borderRadius: 35,
//               borderColor: 'yellow',
//               // backgroundColor: "#21b6ae",
//               padding: "18px 36px",
//               fontSize: "18px",
//               color: 'yellow', 
//               margin: '20px 10px'
//             }} 
//             variant="outlined" size="large" color= 'secondary'>
//             Submit
//           </Button>

//         </form>

//       </div>

//     </section>
//   )
// }

