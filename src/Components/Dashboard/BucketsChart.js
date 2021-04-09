import React, { Component } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

const data = [
    { name: 'Savings', value: 20 },
    { name: 'Emergency', value: 10 },
    { name: 'Travel', value: 10 },
    { name: 'Expenses', value: 60 },
  ];
  const COLORS = ['#fdcb6e', '#e17055', '#74b9ff', '#2d3436'];

  const styles = theme => ({
    titleText: {
        fontWeight: "fontWeightBold",
        fontSize: 20
    },   
    paper: {
      padding: theme.spacing(2),
    }
});

const renderCustomizedLabel = ({
    x, y, name, value
  }) => {
    return (
      <text x={x} y={y} fill="#2d3436" textAnchor="end" dominantBaseline="central">
        {name} ({value})
      </text>
    );
  };


class BucketsChart extends Component {
    render() {
        const { classes } = this.props;
        
        return (
            <div> 
                <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.titleText}>My Buckets</Typography>
                    <PieChart width={800} height={255} onMouseEnter={this.onPieEnter}>
                        <Pie
                            data={data}
                            cx={170}
                            cy={135}
                            innerRadius={30}
                            outerRadius={70}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            label={renderCustomizedLabel}
                        >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                    </PieChart>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(BucketsChart)