import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import '../../../src/Styles/Common/register.css';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

const styles = theme => (
  { formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },}
);
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'PHP',
    label: '₱',
  },
 
];


class UserRegisterPortal extends Component {
  
  render() {
    const {classes} = this.props;
    return (
      <div id="portal">
        
        <form id="portal-container">
        
          
           <div><Typography variant="h5">Lets get to know you! </Typography> </div>
            
                <Grid item xs={4} > <Typography variant="h6"> My Email Address is: </Typography> </Grid>
                <Grid item xs={6} >  <TextField class="modular-column" id="user-email" label="Email Address" fullWidth /> </Grid>
           
            <div><Typography variant="h6">  I am Saving for: </Typography></div>
            <div><Typography variant="h7"> (Changed your mind? dont worry, we can change that after your login) </Typography></div>
            <Grid item xs={12} ></Grid>
            <div><Typography variant="h6">  My Name is: </Typography></div>
                        <Grid item xs={6} >
              <TextField size="small" required id="portal-firstname" label="First Name" type="search" variant="outlined" fullWidth margin="prop" /></Grid>
            
            <Grid item xs={5}><TextField size="small" required id="portal-lastname" label="Last Name" type="search" variant="outlined" fullWidth margin="prop" /></Grid>
            <div><Typography variant="h6">  I want my Password to be: </Typography></div>
            <Grid item xs={7} > <TextField
          Required
          size="small"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          fullWidth
        /> </Grid>
        <div><Typography variant="h6">  Confirm Password:  </Typography></div>
            <Grid item xs={7} > <TextField
          Required
          size="small"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          fullWidth
        /> </Grid>
         <Grid item xs={6} ><div><Typography variant="h6">  I am from:                     </Typography></div> </Grid>
         <Grid item xs={5} ><div><Typography variant="h6"> Currency: </Typography></div> </Grid>
         <Grid item xs={6} >
           <Select
           fullWidth
           size="small"
           variant="outlined"
          native
          label="Country"
          inputProps={{
            name: 'country',
            id: 'outlined-country-native-simple',
          }}
        >
          <option aria-label="Select Country" value="" />
          <option value="Philippines">Philippines</option>
          <option value="United States">United States</option>
          <option value="Europe">Europe</option>
        </Select>
      
      </Grid>
      <Grid item xs={5} >
      <TextField
          fullWidth
          size="small"
          id="outlined-select-currency-native"
          select
          SelectProps={{
            native: true,
          }}
           variant="outlined"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        </Grid>

        <Grid container justify="center">
        <Button variant="outlined">Reset All Fields</Button>
        <Button variant="outlined">Let's Start Saving!</Button>
        </Grid>
        </form>
        </div>
    );
  }
}

//export default (withRouter(UserRegisterPortal(withStyles(styles))));
export default withRouter(withStyles(styles)(UserRegisterPortal));