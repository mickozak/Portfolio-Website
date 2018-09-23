import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'

import Card from './Card'

class ProjectsReact extends React.Component{
    render(){
        return(
            <Grid container spacing={5}>
                <Grid item xs container justify="center" style={{padding:'1em'}}>
                    <Card
                        img={"https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png"}
                        projectName={"React Exercise"}
                        projectDescription={"The repository includes exercises using the React library. This is not a project only separate exercises."}
                        github={"https://github.com/mickozak/React"}
                        livedemo={"https://mickozak.github.io/React/"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'1em'}}>
                <Card
                    img={"https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png"}
                    projectName={"Contacts List"}
                    projectDescription={"An application that acts as a contact list. It was made using JavaScript and the React and Material-UI libraries."}
                    github={"https://github.com/mickozak/React-ContactsList/"}
                    livedemo={"https://mickozak.github.io/React-ContactsList/"}
                />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'1em'}}>
                    <Card
                        img={"https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png"}
                        projectName={"Homepage"}
                        projectDescription={"A home page made in JavaScript and the React library using Material-UI and React-MDL. Works on the project are ongoing."}
                        github={"https://github.com/mickozak/Portfolio-Website/"}
                        livedemo={"https://mickozak.github.io/Portfolio-Website/"}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default ProjectsReact