import React, { component } from 'react'
import Grid from '@material-ui/core/Grid'

import  Avatar from './Avatar'

const styles = {
    margin: '0',
    padding: '0'
}

class Landing extends React.Component{
    render () {
        return(
            <div className="landingpage">
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <div className="landing-grid">
                            <Avatar/>
                            <div className="banner-text">
                                <h1>Frontend Developer</h1>
                                <hr/>
                                <p style={styles}>HTML | CSS | JavaScript | React | Material-UI | Ajax | Firebase | Sass | Bootstrap | RWD | Materialize - CSS | Semantic - UI | Pure - CSS | jQuery | Git | JIRA | WebStorm | Photoshop </p>
                                <br></br>
                                <p style={styles}>The page you are on is made in the JavaScript React library.</p>
                                <br></br>
                                <p style={styles}><b>You can find a new version of my portfolio at: <a href="https://mickozak.github.io/Portfolio/">https://mickozak.github.io/Portfolio/</a></b></p>
                                <div className="social-links">
                                    <a href="https://www.linkedin.com/in/mickozak" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-linkedin" aria-hidden="true"/>
                                    </a>
                                    <a href="https://www.github.com/mickozak" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-github-square" aria-hidden="true"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Landing