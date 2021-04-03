import { React, useState } from 'react';
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
import Grid from '@material-ui/core/Grid';

function LandingRegisterPage () {
      //#region Control Input States
      const [userEmail, setEmail] = useState(); 
      //#endregion
     
      //#region  React/ Redux Hooks
      const history = useHistory();
      const dispatch = useDispatch();
      //#endregion
     
      //#region Control Event Hooks
      const onRegisterClick = () => {
           history.push('./userregisterportal');
           if (userEmail) {
             dispatch (hookUserRegister(userEmail));
           }
       }

       const onEmailChange = (e) => {
            setEmail(e.target.value);
       }
       //#endregion
       
      return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}> <Typography> I am Saving For... </Typography> </Grid>
                <Grid item xs={3} sm={3}> <FormControlLabel control={
                                          <Checkbox
                                            name="vacation"
                                            color="primary"/>
                                          }
                                          label="A Vacation" /> </Grid>
                <Grid item xs={3} sm={3}> <FormControlLabel control={
                                          <Checkbox
                                            name="wedding"
                                            color="primary"/>
                                          }
                                          label="A Wedding" /> </Grid>
                <Grid item xs={3} sm={3}> <FormControlLabel control={
                                          <Checkbox
                                            name="car"
                                            color="primary"/>
                                          }
                                          label="A New Car" /> </Grid>
                <Grid item xs={3} sm={3}> <FormControlLabel control={
                                          <Checkbox
                                            name="none"
                                            color="primary"/>
                                          }
                                          label="Just Saving" /></Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={3}><Typography>I Want to Save</Typography></Grid>
                <Grid item xs={3}><TextField id="user-amount" /></Grid>
                <Grid item xs={2}><Typography>Before</Typography></Grid>
                <Grid item xs={4}><TextField id="date"
                          type="date"
                          InputLabelProps={{
                            shrink: true,
                          }}/>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={7}><TextField name="userEmail" onChange = {onEmailChange} value={userEmail || ""} label="Email Address" /></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}><Button variant="contained" color="primary" onClick={onRegisterClick}>  Sign Up!  </Button></Grid>
        </Grid>
        </div>
    );
  }

  export default withRouter(LandingRegisterPage);