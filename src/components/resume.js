import React, {component} from 'react'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

import {Grid,Cell} from 'react-mdl'

class Resume extends React.Component{
    render () {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CAw61fVws7Kyr0c-O-zB5Z7sFJfFwHgF4zwQ4FDAt4z4hw62"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Michał Kozak</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum Lorem Ipsu Lorem Ipsu Lorem Ipsu Lorem Ipsu</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Adress</h5>
                        <p>1 Hacker Way</p>
                        <h5>Phone</h5>
                        <p>+48 739 066 120</p>
                        <h5>Email</h5>
                        <p>kozak_m@outlook.com</p>
                        <h5>Web</h5>
                        <p>michkozak.github.io</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2009}
                            endYear={2015}
                            schoolName="My uniwersity"
                            schoolDescription="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience
                            startJob={2009}
                            endJob={2015}
                            jobName="My uniwersity"
                            jobDescription="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                        skill="HTML"
                        progress={80}
                        />
                        <Skills
                            skill="CSS"
                            progress={70}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={40}
                        />
                        <Skills
                            skill="React"
                            progress={25}
                        />
                        <Skills
                            skill="GIT"
                            progress={80}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume