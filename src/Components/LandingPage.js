import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../src/Styles/Common/common.css'

class LandingPage extends Component {
  render() {
    return (
        <div class='landing-main'>
            <div> <h3>Let's Start Saving!</h3></div>
            <div><TextField id="user-email-landing" label="Email Address" variant="outlined" /> <Button variant="contained" color="primary">  Sign-Up!  </Button></div>
        </div>
    );
  }
}

export default withRouter(LandingPage);