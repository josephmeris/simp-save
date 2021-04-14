import React, { Component } from 'react';
import '../../../src/Styles/Common/common.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GoalContent from './GoalContent';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slider from '@material-ui/core/Slider';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import '../../Styles/Common/dashboard.css';

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
      isAddOpen: false,
      //move to props / separate component
      goalTitle: "",
      goalTargetAmount: ""
    };
  }
  render() {
    const { classes } = this.props;
    const addNewGoal = () => {
      this.setState({ isAddOpen: this.state.isAddOpen = true });
    }

    const saveGoal = () => {
      //  restrict to 4 for the meantime
      if (this.state.goals.length === 4) {
        return;
      }
      const newGoal = { 'goalHeader': this.state.goalTitle, 
                        'totalAmount': this.state.goalTargetAmount, 
                        'totalSaved': '0.00', 
                        'percentage': '0', 
                        'remainingDays': '0', 
                        'remainingMonths': '24' };
      this.setState({
        goals: [... this.state.goals, newGoal]
      });
      this.setState({ isAddOpen: this.state.isAddOpen = false });
      this.setState({goalTitle: this.state.goalTitle = ""});
      this.setState({goalTitle: this.state.goalTargetAmount = ""});
    }

    const onDialogClose = () => {
      this.setState({ isAddOpen: this.state.isAddOpen = false });
    }

    //todo : move later (diaglog specfic)

    const onGoalsTitleChange = (e) =>
    {
        this.setState({goalTitle: this.state.goalTitle = e.target.value});
    }

    const onGoalsAmountChange = (e) =>
    {
         this.setState({goalTargetAmount: this.state.goalTargetAmount = e.target.value});
    }

    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={1}><Typography className={classes.titleText}>My Goals</Typography></Grid>
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
          {this.state.goals.map(goal => (
            <GoalContent header={goal.goalHeader}
              totalAmount={goal.totalAmount}
              totalSaved={goal.totalSaved}
              percentage={goal.percentage}
              remainingDays={goal.remainingDays}
              remainingMonths={goal.remainingMonths} />
          ))}
          <Grid item xs={2}> <IconButton  onClick={addNewGoal} aria-label="add" size="large"> <AddCircleIcon /></IconButton> </Grid>
        </Grid>
        <div />
          {/* Todo create a separate component for this */}
        <Dialog open={this.state.isAddOpen} onClose={onDialogClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add New Goal</DialogTitle>
          <DialogContent>
            <div> <Typography size='small'>Goal: </Typography> </div>
            <div class='input-common'>
                <TextField
                      id="standard-read-only-input"
                      placeholder="Your Goal"
                      value= {this.state.goalTitle || ""}
                      onChange = {onGoalsTitleChange}
                      InputProps={{
                      readOnly: false }} 
                />
            </div>
            <div class='input-common'><Typography gutterBottom>Target Amount:</Typography></div>
            <div class='input-common'>
              <Input
                id="standard-adornment-amount"
                type='numeric'
                value= {this.state.goalTargetAmount || ""}
                onChange = {onGoalsAmountChange}
                thousandSeparator={true}
                startAdornment={<InputAdornment position="start">₱</InputAdornment>}
              />
            </div>
            <div class='input-common'>
              <Typography >Target Duration:</Typography>
            </div>
            <div class='input-common'>
              <TextField
                fullWidth
                size="small"
                id="outlined-select-country"
                select
                SelectProps={{
                  native: true,
                }}>
                {GoalDuration.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.duration}
                  </option>
                ))}
              </TextField>
            </div>
            <div class='input-common'>
             <BudgetSlider valueLabelDisplay="auto" aria-label="Budget Slider" defaultValue={0} max={GoalDuration.max} />
            </div>
            <div class='input-common'>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                    <Button
                        size='small'
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                        onClick={saveGoal}>
                      Save
                    </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                      size='small'
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                      onClick={onDialogClose}>
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div class='input-common'></div>
          </DialogContent>
        </Dialog>
      </div>
    )
  };
}

export default withStyles(styles)(GoalsSummary);

