import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'

import Card from './Card'

class ProjectsReact extends React.Component{
    render(){
        return(

            <Grid container spacing={5}>
                <Grid item container xs justify="center" style={{padding: '0.5em'}}>
                    <Card
                        img={"https://miro.medium.com/max/1108/1*H-25KB7EbSHjv70HXrdl6w.png"}
                        projectName={"Game Mole"}
                        projectDescription={"In progrss..."}
                        github={"#"}
                        livedemo={"#"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                    <Card
                        img={"https://miro.medium.com/max/1108/1*H-25KB7EbSHjv70HXrdl6w.png"}
                        projectName={"Game Cars"}
                        projectDescription={"In progress..."}
                        github={"#"}
                        livedemo={"#"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                    <Card
                        img={"https://miro.medium.com/max/1108/1*H-25KB7EbSHjv70HXrdl6w.png"}
                        projectName={"ToDo List"}
                        projectDescription={"In progress..."}
                        github={"#"}
                        livedemo={"#"}
                    />
                </Grid>
            </Grid>

        )
    }
}

export default ProjectsReact