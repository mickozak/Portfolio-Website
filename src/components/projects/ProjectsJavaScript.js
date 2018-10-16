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
                        projectDescription={"A simple game in which our goal is to kill the mole."}
                        github={"https://github.com/mickozak/Game-Mole"}
                        livedemo={"https://mickozak.github.io/Game-Mole/"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                    <Card
                        img={"https://miro.medium.com/max/1108/1*H-25KB7EbSHjv70HXrdl6w.png"}
                        projectName={"Game Cars"}
                        projectDescription={"A simple game where you must collect points and avoid bombs."}
                        github={"https://github.com/mickozak/Game-Car"}
                        livedemo={"https://mickozak.github.io/Game-Car/"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                    <Card
                        img={"https://miro.medium.com/max/1108/1*H-25KB7EbSHjv70HXrdl6w.png"}
                        projectName={"ToDo List"}
                        projectDescription={"A simple application that allows you to add and delete for tasks."}
                        github={"https://github.com/mickozak/Application-Todo"}
                        livedemo={"https://mickozak.github.io/Application-Todo/"}
                    />
                </Grid>
            </Grid>

        )
    }
}

export default ProjectsReact