import React, {component} from 'react'
import Grid from '@material-ui/core/Grid'

import ResumeLeft from './ResumeLeft'
import ResumeRight from './ResumeRight'

class Resume extends React.Component{
    render () {
        return(
            <div className='resume'>
                <Grid container spacing={8} style={{padding:'1em'}}>
                <Grid item xs={12} sm={6}>
                   <ResumeLeft/>
                </Grid>
                <Grid className="resume-right-col" item xs={12} sm={6}>
                   <ResumeRight/>
                </Grid>
                </Grid>
            </div>
        )
    }
}

export default Resume