/*import React, { Component } from 'react';
import './App.css'
import './Landingpage.css'
import './components/contact/Contact.css'

import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'

import Main from './components/main'
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
          <div className="demo-big-content">
              <Layout>
                  <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Michał Kozak - Junior Frontend Developer</Link>} scroll>
                      <Navigation>
                          <Link to="/resume">Resume</Link>
                          <Link to="/projects">Projects</Link>
                          <Link to="/contact">Contact</Link>
                      </Navigation>
                  </Header>
                  <Drawer>
                      <Navigation>
                          <Link to="/resume">Resume</Link>
                          <Link to="/projects">Projects</Link>
                          <Link to="/contact">Contact</Link>
                      </Navigation>
                  </Drawer>
                  <Content>
                      <div className="page-content" />
                      <Main/>
                  </Content>
              </Layout>
          </div>
    );
  }
}

export default App;*/

import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NotFound } from './components/Errors/index'
import Writers from './components/Writers/index'
import Layout from './components/Layout/index'
import Landingpage from './components/landingpage'
import Resume from './components/resume'
import './App.css'
import './Landingpage.css'
import './components/contact/Contact.css'
import Projects from './components/projects/Projects'
import Grid from '@material-ui/core/Grid'

export default class extends Component {
    state = {
        writers: []
    }

    async componentDidMount() {
        const writers = await (await fetch('http://localhost:3004/writers?_embed=texts')).json()

        this.setState({ writers })
    }

    render() {
        const { writers } = this.state

        return(<Grid>
        <BrowserRouter>
            <Layout writers={writers}>
                <Switch>
                    <Route exact path="/" render={() => <Landingpage/>} />
                    <Route path="/resume" render={
                        props => <Resume {...props} writers={Resume} />
                    } />
                    <Route path="/project" render={
                        props => <Projects {...props} writers={Projects} />
                    } />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
        </Grid>)
    }
}