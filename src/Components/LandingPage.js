import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../src/Styles/Common/common.css'
import LandgingRegisterPage from './User/LandingRegisterPage';

function LandingPage () {
    return (
        <div class='landing-main'>
             <LandgingRegisterPage/>
        </div>
    );
  }

  export default withRouter(LandingPage);