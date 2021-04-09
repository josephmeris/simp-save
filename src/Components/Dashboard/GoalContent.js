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
    }
});

class GoalContent extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid item xs={2}>
                    <Paper elevation={3} className={classes.totalExpenses}> 
                        <Grid container spacing={3}>
                            <Grid item xs={12}>Dynamic Goal </Grid>
                            <Grid item xs={6} className={classes.percentageDisplay}> 50% </Grid>
                            <Grid item xs={6}><Typography className={classes.mainAmountDisplay}>PHP 6,000.00</Typography> </Grid>
                            <Grid item xs={6}><Typography className={classes.subText}>Remaining Budget</Typography></Grid>
                            <Grid item xs={6}><Typography className={classes.subText}>PHP 12,000.00</Typography></Grid>
                        </Grid>
                    </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(GoalContent);