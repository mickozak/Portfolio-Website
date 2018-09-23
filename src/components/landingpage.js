import React, {component} from 'react'

import Grid from '@material-ui/core/Grid'
import  Avatar from './landingpage/avatar'


class Landing extends React.Component{
    render () {
        return(
            <div style={{width: '100%',margin: 'auto'}}>
                <Grid container spacing={24} className="landing-grid">
                    <Grid item xs={12}>

                        <Avatar/>

                        <div className="banner-text">

                            <h1>Junior Frontend Developer</h1>

                            <hr/>

                            <p>HTML | CSS | JavaScript | React | Material-UI | Ajax | Firebase | LESS | Bootstrap | jQuery | Git</p>

                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/mickozak" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true"/>
                                </a>
                                <a href="https://www.github.com/mickozak" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square" aria-hidden="true"/>
                                </a>
                            </div>

                        </div>

                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Landing