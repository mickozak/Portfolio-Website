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
                        projectName={"Arfa Studio"}
                        projectDescription={"A film studio website prepared on commission."}
                        github={"https://github.com/mickozak/Website-ArfaStudio"}
                        livedemo={"https://mickozak.github.io/Website-ArfaStudio/"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                    <Card
                        img={"http://s6.ifotos.pl/img/htmlcssjp_qeqwqsr.jpg"}
                        projectName={"Run Day"}
                        projectDescription={"Website application for running, using materialize."}
                        github={"https://github.com/mickozak/Website-RunDay"}
                        livedemo={"https://mickozak.github.io/Website-RunDay/"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                    <Card
                        img={"http://s6.ifotos.pl/img/htmlcssjp_qeqwqsr.jpg"}
                        projectName={"Foundation OFES"}
                        projectDescription={"Foundation's website prepared on request according to instructions."}
                        github={"https://github.com/mickozak/Website-Foundation"}
                        livedemo={"https://mickozak.github.io/Website-Foundation/"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                    <Card
                        img={"http://s6.ifotos.pl/img/htmlcssjp_qeqwqsr.jpg"}
                        projectName={"BlueDiamondDev."}
                        projectDescription={"Website of the programming company."}
                        github={"https://github.com/mickozak/Website-Company"}
                        livedemo={"https://mickozak.github.io/Website-Company/"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                    <Card
                        img={"http://s6.ifotos.pl/img/htmlcssjp_qeqwqsr.jpg"}
                        projectName={"Sizeer Web"}
                        projectDescription={"Design of the Sizeer website. Used: HTML, CSS, JS."}
                        github={"https://github.com/mickozak/Website-Sizeer"}
                        livedemo={"https://mickozak.github.io/Website-Sizeer/"}
                    />
                </Grid>
                <Grid item xs container justify="center" style={{padding:'0.5em'}}>
                    <Card
                        img={"http://s6.ifotos.pl/img/htmlcssjp_qeqwqsr.jpg"}
                        projectName={"Portfolio"}
                        projectDescription={"Portfolio made in html, css and javascript."}
                        github={"https://github.com/mickozak/Portfolio"}
                        livedemo={"https://mickozak.github.io/Portfolio/"}
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