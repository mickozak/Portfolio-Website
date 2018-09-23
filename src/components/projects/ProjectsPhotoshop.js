import React, {Component} from 'react'

import Grid from '@material-ui/core/Grid'

import Card from './Card'

class ProjectsPhotoshop extends React.Component{
    render(){
        return(
            <Grid container spacing={5}>
                <Grid item xs container justify="center" style={{padding:'1em'}}>
                    <Card
                        img={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png"}
                        projectName={"Website"}
                        projectDescription={"Website design made in Photoshop based on existing graphics. The folder contains a web page file in the \"jpg\" and \"psd\" format in the rar format."}
                        github={"https://github.com/mickozak/Projects-Photoshop/tree/master/website/first"}
                        livedemo={"https://github.com/mickozak/Projects-Photoshop/blob/master/website/first/first.jpg"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'1em'}}>
                    <Card
                        img={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png"}
                        projectName={"Website"}
                        projectDescription={"Website design made in Photoshop based on existing graphics. The folder contains a web page file in the \"jpg\" and \"psd\" format in the rar format."}
                        github={"https://github.com/mickozak/Projects-Photoshop/tree/master/website/second"}
                        livedemo={"https://github.com/mickozak/Projects-Photoshop/blob/master/website/second/second.jpg"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'1em'}}>
                    <Card
                        img={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png"}
                        projectName={"Logo"}
                        projectDescription={"Logo projection made in photoshop. The folder contains a logo file in the \"jpg\" and \"psd\" format. In addition, there are source files in the folder: fonts and background."}
                        github={"https://github.com/mickozak/Projects-Photoshop/tree/master/logo/first"}
                        livedemo={"https://github.com/mickozak/Projects-Photoshop/blob/master/logo/first/logo_live_city.jpg"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'1em'}}>
                    <Card
                        img={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png"}
                        projectName={"Poster"}
                        projectDescription={"Poster made using Photoshop. File in .jpg format. Poster made for the needs of didactic classes for students of the \"Media Production\" branch."}
                        github={"https://github.com/mickozak/Projects-Photoshop/tree/master/posters/one"}
                        livedemo={"https://github.com/mickozak/Projects-Photoshop/tree/master/posters/one"}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default ProjectsPhotoshop