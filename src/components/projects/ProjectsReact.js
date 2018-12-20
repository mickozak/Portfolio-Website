import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'

import Card from './Card'

class ProjectsReact extends React.Component{
    render(){
        return(
            <Grid container spacing={5}>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                    <Card
                        img={"https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png"}
                        projectName={"React Ex."}
                        projectDescription={"The repository includes exercises using the React library. This is not a project only separate exercises."}
                        github={"https://github.com/mickozak/React"}
                        livedemo={"https://mickozak.github.io/React/"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                <Card
                    img={"https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png"}
                    projectName={"Contacts List"}
                    projectDescription={"An application that acts as a contact list. It was made using JavaScript and the React and Material-UI libraries."}
                    github={"https://github.com/mickozak/React-ContactsList/"}
                    livedemo={"https://mickozak.github.io/React-ContactsList/"}
                />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                    <Card
                        img={"https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png"}
                        projectName={"Homepage"}
                        projectDescription={"A home page made in JavaScript and the React library using Material-UI and React-MDL. Works on the project are ongoing."}
                        github={"https://github.com/mickozak/Portfolio-Website/"}
                        livedemo={"https://mickozak.github.io/Portfolio-Website/"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                    <Card
                        img={"https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png"}
                        projectName={"React Chat"}
                        projectDescription={"An application containing a chat created based on firebase in the react library. The moment library was used."}
                        github={"https://github.com/mickozak/React-Firebase-App"}
                        livedemo={"https://mickozak.github.io/React-Firebase-App/"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                    <Card
                        img={"https://cdn-images-1.medium.com/max/679/1*qUlxDdY3T-rDtJ4LhLGkEg.png"}
                        projectName={"Hair Salon"}
                        projectDescription={"An application in which a logged-in user can add training. "}
                        github={"https://github.com/mickozak/React-Hair-Salon"}
                        livedemo={"https://mickozak.github.io/React-Hair-Salon/"}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default ProjectsReact