import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

class Training extends React.Component{
    render(){
        return(
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <p>{this.props.dateTraining}</p>
                </Grid>
                <Grid item xs={8}>
                    <p>{this.props.nameTraining}</p>
                </Grid>
            </Grid>
        )
    }
}

export default Training