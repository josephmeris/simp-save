import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../../src/Styles/Common/common.css'

class Login extends Component {
  render() {
    return (
        <div>
          <form>
            <div id='main-div-container'>
              <div class='form-main-input'>
                <div> <h3>Welcome Back</h3></div>
                <div class='form-input'><TextField id="user-username" label="Username" variant="outlined" /></div>
                <div class='form-input'><TextField id="user-password" label="Password" type="password" variant="outlined" /></div>
                <div class='form-input'><Button variant="contained" color="primary">  Sign in  </Button></div> 
                <div class='form-input'><Button color="primary" size='small'>Forgot Password</Button></div>
                <div class='form-input'><Button color="primary" size='small'>Don't have an account? Sign up</Button></div>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default Login;