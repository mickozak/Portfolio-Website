import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'

class Experience extends React.Component{
    render(){
        return(
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <p>{this.props.startJob} - {this.props.endJob}</p>
                </Grid>
                <Grid item xs={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>
                </Grid>
            </Grid>
        )
    }
}

export default Experience