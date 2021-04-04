import React, { Component } from 'react';
import '../../../src/Styles/Common/common.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import Button from '@material-ui/core/Button';

const styles = theme => ({
      paper: {
        padding: theme.spacing(2),
      },
      totalExpenses: {
        padding: theme.spacing(1),
        color: "white",
        background: "#74b9ff"
      },
      goal1: {
        padding: theme.spacing(1),
        color: "white",
        background: "#fab1a0"
      },
      goal2: {
        padding: theme.spacing(1),
        color: "white",
        background: "#00cec9"
      },
      goal3: {
        padding: theme.spacing(1),
        color: "white",
        background: "#a29bfe"
      }, 
      subText: {
          fontSize: 12
      },
      mainAmountDisplay: {
          fontWeight: "fontWeightBold"
      },   
      percentageDisplay: {
          fontWeight: "fontWeightBold",
          fontSize: 30
      },
      titleText: {
        fontWeight: "fontWeightBold",
        fontSize: 20
    }
  });

class GoalsSummary extends Component {
    render() {
  
    const { classes } = this.props;
    const mainComponentSize = 2;
  
    return (
          <div>
              <Grid container spacing={2}>
              <Grid item xs={6}><Typography className={classes.titleText}>My Goals</Typography></Grid>
              <Grid item xs={6}>   
                   <Button
                        size='small'
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                        startIcon={<SettingsRoundedIcon />}                                                  >
                        Manage
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
               <Grid item xs={12} />
                <Grid item xs={mainComponentSize}>
                    <Paper elevation={3} className={classes.totalExpenses}> 
                        <Grid container spacing={3}>
                            <Grid item xs={12}>Total Monthly Expenses </Grid>
                            <Grid item xs={6} className={classes.percentageDisplay}> 50% </Grid>
                            <Grid item xs={6}><Typography className={classes.mainAmountDisplay}>PHP 6,000.00</Typography> </Grid>
                            <Grid item xs={6}><Typography className={classes.subText}>Remaining Budget</Typography></Grid>
                            <Grid item xs={6}><Typography className={classes.subText}>PHP 12,000.00</Typography></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={mainComponentSize}>
                    <Paper elevation={3} className={classes.goal1}> 
                        <Grid container spacing={3}>
                            <Grid item xs={12}>Trip to Europe 2022 </Grid>
                            <Grid item xs={6} className={classes.percentageDisplay}> 25% </Grid>
                            <Grid item xs={6}><Typography className={classes.mainAmountDisplay}>PHP 200,000.00</Typography></Grid>
                            <Grid item xs={5}><Typography className={classes.subText}>24 mos 0 days</Typography></Grid>
                            <Grid item xs={7}><Typography className={classes.subText}>PHP 800,000.00</Typography></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={mainComponentSize}>
                    <Paper elevation={3} className={classes.goal2}> 
                        <Grid container spacing={3}>
                            <Grid item xs={12}>New Car </Grid>
                            <Grid item xs={6} className={classes.percentageDisplay}> 10% </Grid>
                            <Grid item xs={6}><Typography className={classes.mainAmountDisplay}>PHP 206,000.00</Typography> </Grid>
                            <Grid item xs={5}><Typography className={classes.subText}>11 mos 2 days</Typography></Grid>
                            <Grid item xs={7}><Typography className={classes.subText}>PHP 2,000,000.00</Typography> </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={mainComponentSize}>
                     <Paper elevation={3} className={classes.goal3}> 
                        <Grid container spacing={3}>
                            <Grid item xs={12}>House Renovation </Grid>
                            <Grid item xs={6} className={classes.percentageDisplay}> 13% </Grid>
                            <Grid item xs={6}><Typography className={classes.mainAmountDisplay}>PHP 116,000.00</Typography> </Grid>
                            <Grid item xs={5}><Typography className={classes.subText}>12 mos 0 days</Typography> </Grid>
                            <Grid item xs={7}><Typography className={classes.subText}>PHP 920,000.00</Typography></Grid>
                        </Grid>
                    </Paper>
                </Grid>
              </Grid>
          </div>
      )
    };
}

export default withStyles(styles)(GoalsSummary);

