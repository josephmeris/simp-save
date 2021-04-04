import React, { Component } from 'react';
import '../../../src/Styles/Common/common.css';
import GoalsSummary from '../Dashboard/GoalsSummary';
import UpcomingEvents from '../Dashboard/UpcomingEvents';
import Grid from '@material-ui/core/Grid';

class UserMainDashboardComponent extends Component {
    render() {
      return (
          <div class='main-dashboard-container'>
              <Grid container spacing={2}>
                    <Grid item xs={12} > <GoalsSummary /> </Grid>
                    <Grid item xs={4}> <UpcomingEvents />  </Grid>
                    <Grid item xs={4}> Graph </Grid>
              </Grid>
          </div>
      )
    };
}

export default UserMainDashboardComponent;