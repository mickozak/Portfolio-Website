import React, {component} from 'react'

import {Grid,Cell} from 'react-mdl'

class Landing extends React.Component{
    render () {
        return(
            <div style={{width: '100%',margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>

                        <img
                        src="https://www.shareicon.net/download/2015/09/18/103160_man_512x512.png"
                        alt="Avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Junior Frontend Developer</h1>

                            <hr/>

                            <p>HTML | CSS | JavaScript | React</p>

                            <div className="social-links">
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true"/>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square" aria-hidden="true"/>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-facebook-square" aria-hidden="true"/>
                                </a>
                            </div>

                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing