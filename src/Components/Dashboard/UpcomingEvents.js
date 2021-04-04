import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import Paper from '@material-ui/core/Paper';
import EventsGrid from './EventsGrid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
    titleText: {
        fontWeight: "fontWeightBold",
        fontSize: 20
    },   
    subText: {
        fontWeight: "fontWeightBold",
        fontSize: 12
    },
    paper: {
        padding: theme.spacing(2),
      }
});

class GoalsSummary extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper elevation={3} className={classes.paper}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}> <Typography className={classes.titleText}>Activity</Typography> </Grid>
                        <Grid item xs={12}> <Typography className={classes.subText}>My Upcoming Reminders</Typography></Grid>                      
                        <Grid item xs={5}>
                        <InputLabel htmlFor="grid-filter">Show</InputLabel>
                        <Select native id='grid-filter'>
                           <option value={0}>This Month</option>
                           <option value={1}>This Week</option>
                           <option value={2}>Next Month</option>
                           <option value={3}>This Year</option>
                           <option value={3}>All</option>
                         </Select>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={1}> <IconButton aria-label="delete">
                                              <AddCircleIcon />
                                           </IconButton> 
                        </Grid>
                        <Grid item xs={1}> <IconButton aria-label="Manage">
                                              <SettingsRoundedIcon />
                                           </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                            <EventsGrid />
                        </Grid>
                    </Grid>
                </Paper>
            </div>
            )
        };
    }

export default withStyles(styles)(GoalsSummary)