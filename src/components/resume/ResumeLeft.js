import React, { component } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

class ResumeLeft extends React.Component{
    render () {
        return(
            <div style={{width: '100%',margin: 'auto'}}>
                <h2>Michał Kozak</h2>
                <h4 style={{color: 'grey'}}>Junior Frontend Developer</h4>
                <hr style={{borderTop: '2px solid #8230a3', width: '60%'}}/>
                <p>I would like to develop my skills and gain experience in the field of JavaScript as well as React, React Native and Vue libraries.</p>
                <hr style={{borderTop: '2px solid #8230a3', width: '60%'}}/>
                <h5>Phone:</h5>
                <p>+48 739 066 120</p>
                <h5>E-mail:</h5>
                <p>kozak_m@outlook.com</p>
                <h5>LinkedIn:</h5>
                <p>https://www.linkedin.com/in/mickozak</p>
                <h5>GitHub:</h5>
                <p>https://www.github.com/mickozak</p>
                <hr style={{borderTop: '2px solid #8230a3', width: '60%'}}/>
                <h5>Main skills:</h5>
                <p>HTML</p>
                <LinearProgress color="primary" value="80" variant="determinate"/>
                <p>CSS</p>
                <LinearProgress color="primary" value="70" variant="determinate"/>
                <p>JavaScript</p>
                <LinearProgress color="primary" value="50" variant="determinate"/>
                <p>React</p>
                <LinearProgress color="primary" value="30" variant="determinate"/>
                <br/>
            </div>
        )
    }
}

export default ResumeLeft