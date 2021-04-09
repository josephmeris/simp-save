import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    paper: {
      padding: theme.spacing(2),
    },
    totalExpenses: {
      padding: theme.spacing(1),
      color: "white",
      background: "#0984e3"
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
    }
});

class GoalContent extends Component {
    render() {
        const { classes } = this.props;
        
        return (
            <Grid item xs={2}>
                    <Paper elevation={3} className={classes.totalExpenses}> 
                        <Grid container spacing={3}>
                            <Grid item xs={12}> {this.props.header} </Grid>
                            <Grid item xs={6} className={classes.percentageDisplay}> {this.props.percentage}% </Grid>
                            <Grid item xs={6}><Typography className={classes.mainAmountDisplay}>PHP {this.props.totalSaved}</Typography> </Grid>
                            <Grid item xs={6}><Typography className={classes.subText}>{this.props.remainingMonths} mos {this.props.remainingDays} days</Typography></Grid>
                            <Grid item xs={6}><Typography className={classes.subText}>PHP {this.props.totalAmount}</Typography></Grid>
                        </Grid>
                    </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(GoalContent);