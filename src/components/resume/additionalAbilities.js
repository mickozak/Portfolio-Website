import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'

class AdditionalAbilities extends React.Component{
    render(){
        return(
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <p>{this.props.additionalabilities}</p>
                </Grid>
            </Grid>
        )
    }
}

export default AdditionalAbilities