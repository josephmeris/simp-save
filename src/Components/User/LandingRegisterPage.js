import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function LandingRegisterPage () {
      const history = useHistory();
      const onRegisterClick = () => {
           history.push('./userregisterportal');
       }
      return (
        <div class='landing-main'>
            <div> <h3>Let's Start Saving!</h3></div>
            <div><TextField id="user-email-landing" label="Email Address" variant="outlined" />
                 <Button variant="contained" color="primary" onClick={onRegisterClick}>  Sign-Up! </Button>
            </div>
        </div>
    );
  }

  export default withRouter(LandingRegisterPage);