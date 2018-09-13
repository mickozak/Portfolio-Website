import React, {component} from 'react'

import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'

class Projects extends React.Component {
    constructor(props){
        super(props)
        this.state = {activeTab: 0}
        }

        toggleCategories(){
            if(this.state.activeTab === 0){
                return(
                    <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIu2Prwqjaw76v0ReFNE7op3Xkcr9Vai3DnY2G_IZdhaHQl_eC) center / cover'}}>
                            HTML/CSS Project #1
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIu2Prwqjaw76v0ReFNE7op3Xkcr9Vai3DnY2G_IZdhaHQl_eC) center / cover'}}>
                                HTML/CSS Project #1
                            </CardTitle>
                            <CardText>
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </div>

                )


            } else if(this.state.activeTab===1){
                return(
                    <div>
                        <h1>This is JS</h1>
                    </div>
                )
            } else if(this.state.activeTab===2){
                return(
                    <div>
                        <h1>This is React</h1>
                    </div>
                )
            } else {
                    return(
                        <div>
                            <h1>This is Photoshop</h1>
                        </div>
                    )
                }
            }


        render()
        {
            return (
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}
                          ripple>
                        <Tab>HTML/CSS</Tab>
                        <Tab>JavaScrit</Tab>
                        <Tab>React</Tab>
                        <Tab>Photoshop</Tab>
                    </Tabs>

                    <section>
                        <Grid>
                            <Cell col={12}>
                                <div className="content">
                                    {this.toggleCategories()}
                                </div>
                            </Cell>
                        </Grid>
                    </section>
                </div>
            )
        }
}

export default Projects