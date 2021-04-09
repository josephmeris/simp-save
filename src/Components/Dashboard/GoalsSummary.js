import React, { Component } from 'react';
import '../../../src/Styles/Common/common.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import Button from '@material-ui/core/Button';
import GoalContent from './GoalContent';

const styles = theme => ({
      paper: {
        padding: theme.spacing(2),
      },
      totalExpenses: {
        padding: theme.spacing(1),
        color: "white",
        background: "#2d3436"
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
  constructor(props) {
    super(props);
    this.state = {
      goals: []
    };
  }
    render() { 
  
    const { classes } = this.props;
    const addNewGoal =()=> {
      //  restrict to 4 for the meantime
       if (this.state.goals.length === 4) {
         return;
       }
       const newGoal = {'goalHeader': 'Dynamic Goal', 'totalAmount': '20,000,000.00', 'totalSaved': '6,000.00', 'percentage': '10', 'remainingDays': '4', 'remainingMonths': '20'};
       this.setState({
            goals: [... this.state.goals, newGoal]
       });
    }
  
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
                        onClick={addNewGoal}>
                        Add
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
              {/* Static Display */}
              <Grid item xs={2}>
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
                  { this.state.goals.map(goal => (            
                      <GoalContent header={goal.goalHeader} 
                                   totalAmount={goal.totalAmount}
                                   totalSaved={goal.totalSaved}
                                   percentage={goal.percentage}
                                   remainingDays={goal.remainingDays}
                                   remainingMonths={goal.remainingMonths}/>
                  ))}             
              </Grid>
          </div>
      )
    };
}

export default withStyles(styles)(GoalsSummary);

