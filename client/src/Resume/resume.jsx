import React, { Component } from 'react';
import Pdf from 'client/src/Resume/Tyagi, Rishabh_Chicago_SWE_Resume.pdf';

class Resume extends Component {

  render() {

    return (
        <div className = "App">
          <a href = {Pdf} target = "_blank">Resume Pdf</a>
        </div>
    );

  }
}

export default Resume;