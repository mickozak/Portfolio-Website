import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'

import Card from './Card'

class ProjectsBasic extends React.Component{
    render(){
        return(
            <Grid container spacing={5}>
                <Grid item xs container style={{padding:'1em'}}>
                    <Card
                        img={"https://i.ytimg.com/vi/mztpp0YzvF0/hqdefault.jpg"}
                        projectName={"Website Active Student"}
                        projectDescription={" Website prepared for the student organization. I used HTML, CSS, JS. "}
                        github={"https://github.com/mickozak/Website-ActiveStudent"}
                        livedemo={"https://mickozak.github.io/Website-ActiveStudent/"}
                    />
                </Grid>
                <Grid item xs container style={{padding:'1em'}}>
                    <Card
                        img={"https://i.ytimg.com/vi/mztpp0YzvF0/hqdefault.jpg"}
                        projectName={"CSS effect"}
                        projectDescription={"The repository contains various mini CSS projects. Made with different properties. "}
                        github={"https://github.com/mickozak/CSS"}
                        livedemo={"#"}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default ProjectsBasic