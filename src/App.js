import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import './App.css'
import './components/landingpage/landingpage.css'
import './components/resume/resume.css'
import Layout from './components/layout/Layout'
import Landingpage from './components/landingpage/Landingpage'
import Resume from './components/resume/Resume'
import Projects from './components/projects/Projects'

export default class extends Component {
    state = {
        pages: []
    }

    async componentDidMount() {
        const pages = await (await fetch('http://localhost:3004/pages?_embed=texts')).json()
        this.setState({pages})
    }

    render() {
        const {pages} = this.state

        return(<Grid>
        <BrowserRouter>
            <Layout pages={pages}>
                <Switch>
                    <Route exact path="/" render={() => <Landingpage/>} />
                    <Route path="/resume" render={
                        props => <Resume {...props} pages={Resume} />
                    } />
                    <Route path="/project" render={
                        props => <Projects {...props} pages={Projects} />
                    } />
                </Switch>
            </Layout>
        </BrowserRouter>
        </Grid>)
    }
}