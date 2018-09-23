import React, {component} from 'react'

import ResumeLeft from './resume/resumeLeft'
import ResumeRight from './resume/resumeRight'

import Grid from '@material-ui/core/Grid'

class Resume extends React.Component{
    render () {
        return(

            <div>

                <Grid className='test' container spacing={8} style={{padding:'1em'}}>

                <Grid item xs>


                   <ResumeLeft/>

                </Grid>

                <Grid className="resume-right-col" item xs>
                   <ResumeRight/>
                </Grid>

                </Grid>

            </div>
        )
    }
}

export default Resume