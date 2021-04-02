import React from 'react';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import 'date-fns';
import {hookUserRegister} from '../../actions';
import { useDispatch } from 'react-redux';

function LandingRegisterPage () {
      const history = useHistory();
      const dispatch = useDispatch();
      let textInput = React.createRef();     

      const onRegisterClick = () => {
           history.push('./userregisterportal');
           dispatch (hookUserRegister("josephbennymeris@gmail.com"));
       }    

      return (
        <div id="main-container-landing-register" class='landing'>
           <div><Typography variant="h6"> I am Saving For... </Typography></div>  
           <div class='modular-row'>
              <div class='modular-column'><FormControlLabel control={
                                          <Checkbox
                                            name="vacation"
                                            color="primary"/>
                                          }
                                          label="A Vacation" /></div>
              <div class='modular-column'><FormControlLabel control={
                                          <Checkbox
                                            name="wedding"
                                            color="primary"/>
                                          }
                                          label="A Wedding" /></div>
              <div class='modular-column'><FormControlLabel control={
                                          <Checkbox
                                            name="car"
                                            color="primary"/>
                                          }
                                          label="A New Car" /></div>
              <div class='modular-column'><FormControlLabel control={
                                          <Checkbox
                                            name="none"
                                            color="primary"/>
                                          }
                                          label="Just Saving" /></div>
           </div> 

           <div id ='sub-category' class='sub-category'>
             <div class='modular-row'>
               <div class='modular-column'><Typography variant="h6"> I Need</Typography></div>
               <div class='modular-column'><TextField id="user-amount" /></div>      
               <div class='modular-column'><Typography variant="h6"> By</Typography></div>    
               <div class='modular-column'>
               <TextField id="date"
                          type="date"
                          InputLabelProps={{
                            shrink: true,
                          }}
                />
               </div>        
               </div>         
           </div>   
           <div id ='sub-category3' class='sub-category-misc'>
               <div class='modular-row'>
                   <div class='modular-column'><TextField ref={textInput} id="user-email" label="Email Address" /></div>    
                   <div class='modular-column'><Button variant="contained" color="primary" onClick={onRegisterClick}>  Sign Up!  </Button></div>                
               </div>
           </div>     
        </div>
    );
  }

  export default withRouter(LandingRegisterPage);