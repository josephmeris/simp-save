import React, { Component } from 'react';
import '../../../src/Styles/Common/common.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import Button from '@material-ui/core/Button';
import GoalContent from './GoalContent';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

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
  const BudgetSlider = withStyles({
    root: {
      color: '##636e72',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

  const GoalDuration = [
    {
      value: 'Days',
      duration: 'Days',
      max: 30,
      
    },
    {
      value: 'Weeks',
      duration: 'Weeks',
      max: 52,
    },
  
    {
      value: 'Month',
      duration: 'Month',
      max: 12,
    },
    {
      value: 'Years',
      duration: 'Years',
      max: 25,
      
    }]

class GoalsSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [],
      isAddOpen: false
    };
  }
    render() { 
    const { classes } = this.props;
    const addNewGoal =()=> {
      this.setState({ isAddOpen: this.state.isAddOpen = true});
    } 

    const saveGoal =() => {
      //  restrict to 4 for the meantime
       if (this.state.goals.length === 4) {
         return;
       }
       const newGoal = {'goalHeader': 'Dynamic Goal', 'totalAmount': '20,000,000.00', 'totalSaved': '6,000.00', 'percentage': '10', 'remainingDays': '4', 'remainingMonths': '20'};
       this.setState({
            goals: [... this.state.goals, newGoal]
       });
       this.setState({ isAddOpen: this.state.isAddOpen = false});
    }

    const onDialogClose =() => {
      this.setState({ isAddOpen: this.state.isAddOpen = false});
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

              <Dialog open={this.state.isAddOpen} onClose={onDialogClose}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Goal</DialogTitle>
        <DialogContent>
                    <Typography  size='small'>Goal: </Typography> 
          <TextField
          id="standard-read-only-input"
          placeholder="Your Goal"
          InputProps={{
            readOnly: false,
          }}
        />
       
                  <div />
      <Typography gutterBottom>Target Amount</Typography>
      
          <Input
            id="standard-adornment-amount"
            type='numeric'
           // value={values.amount}
           // onChange={handleChange('amount')}
           thousandSeparator={true}
            startAdornment={<InputAdornment position="start">₱</InputAdornment>}
          />
          <Typography >Target Duration</Typography>
          <TextField
          fullWidth
          size="small"
          id="outlined-select-country"
          select
          SelectProps={{
            native: true,
          }}
           variant="filled"
        >
          {GoalDuration.map((option) => (
            <option key={option.value} value={option.value}>
              {option.duration}
            </option>
          ))}
        </TextField>
    <BudgetSlider valueLabelDisplay="auto" aria-label="Budget Slider" defaultValue={0} max={GoalDuration.max} />
    <Button
                        size='small'
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                        onClick={saveGoal}>
                        Save
                  </Button>
          </DialogContent>
          </Dialog>
          
          </div>
      )
    };
}

export default withStyles(styles)(GoalsSummary);

