import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserAvatar from './UserAvatar';
// Button Icons 
import Button from '@material-ui/core/Button';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AlarmOutlinedIcon from '@material-ui/icons/AlarmOutlined';

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        color: "black",
        background: "white"
      },
      button: {
          textTransform: 'none',
          fontSize: 12
      }
});

class SideBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className = {classes.paper}> 
                 <Grid container spacing={2}>
                        <Grid item xs={12}> <UserAvatar /> </Grid>
                        <Grid item xs={12}/>
                        <Grid item xs={12}>               
                        <Button
                            className = {classes.button}
                            startIcon={<AccountBalanceWalletOutlinedIcon />}>
                            Manage Buckets
                        </Button> </Grid>
                        <Grid item xs={12}>   
                         <Button
                            className = {classes.button}
                            startIcon={<AccountCircleOutlinedIcon />}>
                            My Accounts
                        </Button> </Grid>
                          <Grid item xs={12}>       
                            <Button
                                className = {classes.button}
                                startIcon={<LibraryBooksOutlinedIcon />}>
                                Budget Planner
                            </Button>
                        </Grid>
                        <Grid item xs={12}>       
                            <Button
                                className = {classes.button}
                                startIcon={<AlarmOutlinedIcon />}>
                               Debt Management
                            </Button>
                        </Grid>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}>       
                            <Button
                                className = {classes.button}
                                startIcon={<SettingsOutlinedIcon />}>
                                Account Settings
                            </Button>
                        </Grid>
                        <Grid item xs={12}>  
                        <Button  className = {classes.button}
                            startIcon={<ExitToAppOutlinedIcon />}>
                           Logout
                        </Button> </Grid>
                 </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(SideBar)