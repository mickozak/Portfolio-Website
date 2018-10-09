import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'

import Card from './Card'

class ProjectsBasic extends React.Component{
    render(){
        return(
            <Grid container spacing={5}>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                    <Card
                        img={"http://s6.ifotos.pl/img/htmlcssjp_qeqwqsr.jpg"}
                        projectName={"Active Student"}
                        projectDescription={"Website prepared for the student organization."}
                        github={"https://github.com/mickozak/Website-ActiveStudent"}
                        livedemo={"https://mickozak.github.io/Website-ActiveStudent/"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                    <Card
                        img={"http://s6.ifotos.pl/img/htmlcssjp_qeqwqsr.jpg"}
                        projectName={"CSS Effect"}
                        projectDescription={"The repository contains various mini projects."}
                        github={"https://github.com/mickozak/CSS"}
                        livedemo={"https://mickozak.github.io/CSS/"}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default ProjectsBasic