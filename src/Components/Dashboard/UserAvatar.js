import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import loyd from '../../Images/loyd.jpg'
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
});

class UserAvatar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={2}>
            <Grid item xs={12}></Grid>
            <Grid item> 
                <Avatar className={classes.orange} src={loyd}></Avatar>
            </Grid>
            <Grid item xs={8}> John Lloyd Cruz</Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(UserAvatar)