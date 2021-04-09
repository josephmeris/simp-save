import React, { Component } from 'react';
import '../../../src/Styles/Common/common.css';
import GoalsSummary from '../Dashboard/GoalsSummary';
import UpcomingEvents from '../Dashboard/UpcomingEvents';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import BucketsChart from './BucketsChart';
import loyd from '../../Images/loyd.jpg'

const styles = theme => ({
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
});


class UserMainDashboardComponent extends Component {
    render() {
      const { classes } = this.props;
      return (
          <div class='main-dashboard-container'>
              <Grid container spacing={2}>
              <Grid item xs = {2}> Sidebar</Grid>
              <Grid item xs = {10}>
                <Grid container spacing={2}>
                        <Grid item xs={12}></Grid>
                        <Grid item> <Avatar className={classes.orange} src={loyd}></Avatar></Grid>
                        <Grid item xs={3}> John Lloyd Cruz</Grid>
                        <Grid item xs={12}> <GoalsSummary /></Grid>
                        <Grid item xs={4}> <UpcomingEvents /></Grid>
                        <Grid item xs={4}> <BucketsChart /></Grid>
                </Grid>
               </Grid>
              </Grid>
          </div>
      )
    };
}

export default withStyles(styles)(UserMainDashboardComponent);