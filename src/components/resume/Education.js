import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

class Education extends React.Component{
    render(){
        return(
            <Grid container>
                <Grid item xs={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Grid>
                <Grid item xs={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                    <p>{this.props.department}</p>
                    <p>{this.props.fieldOfStudy}</p>
                    <p>{this.props.specialty}</p>
                    <p>{this.props.useTechnology}</p>
                </Grid>
            </Grid>
        )
    }
}

export default Education