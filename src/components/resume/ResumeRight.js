import React, {component} from 'react'

import AdditionalAbilities from './AdditionalAbilities'
import Education from './Education'
import Experience from './Experience'
import Training from './Training'

class ResumeRight extends React.Component{
    render () {
        return(
            <div className='resume-right-col-text'>
                <h2>Education</h2>
                <Education
                    startYear={"03.2018"}
                    endYear={"05.2018"}
                    schoolName={"infoShare Academy"}
                    fieldOfStudy={"Junior Frontend Developer"}
                    useTechnology={"Skills: Git, HTML, CSS, JavaScript, React, Material-UI, Ajax, jQuery, Firebase, Bootstrap, Jira, WebStorm, Photoshop, Scrum"}
                />
                <Education
                    startYear={"09.2014"}
                    endYear={"10.2016"}
                    schoolName={"Maria Curie-Sklodowska University"}
                    department={"Faculty: Economic Sciences"}
                    fieldOfStudy={"Field of study: Management"}
                    specialty={"Specialization: Information Systems in Administration and Business"}
                />
                <Education
                    startYear={"09.2014"}
                    endYear={"10.2016"}
                    schoolName={"The John Paul II Catholic University of Lublin"}
                    department={"Faculty: Mathematics, Computer Science and Landscape Architecture"}
                    fieldOfStudy={"Field of study: Spatial Management"}
                />
                <hr style={{borderTop: '2px solid #8230a3'}}/>
                <h2>Experience</h2>
                <Experience
                    startJob={'03.2018'}
                    endJob={'obecnie'}
                    jobName="Freelancer"
                    jobDescription={[<div><b>Responsibilities:</b><ul><li>creating websites in accordance with modern standards,</li><li>administration of websites,</li><li>marketing and graphic design.</li></ul></div>]}
                />
                <Experience
                    startJob={'02.2017'}
                    endJob={'obecnie'}
                    jobName="Maria Curie Skłodowska University - Lecturer"
                    jobDescription={[<div><b>Responsibilities:</b><ul><li>conducting didactic classes for students in the following subjects: basics of computer graphics with elements of HTML and CSS, basics of marketing, e-marketing and social media.</li></ul></div>]}
                />
                <Experience
                    startJob={'10.2017'}
                    endJob={'03.2018'}
                    jobName="Piastel - Designer's Assistant"
                    jobDescription={[<div><b>Responsibilities:</b><ul><li>preparation of detailed designs, cost estimates and material specifications,</li><li>preparation of telecommunications network design documentation, to the extent necessary to obtain a decision on building permit or notification of the intention to conduct construction works,</li><li>performing design work in the AutoCad program in accordance with the Customer's guidelines and applicable laws and standards.</li></ul></div>]}
                />
                <Experience
                    startJob={'08.2017'}
                    endJob={'10.2017'}
                    jobName="Hotel Europa - Marketing and sales specialist"
                    jobDescription={[<div><b>Responsibilities:</b><ul><li>active co-creation of sales strategies and planning of marketing activities,</li><li>preparation of commercial offers and sale of conference services,
                    </li><li>support for FB, Google+, Instagram, Wordpress.</li></ul></div>]}
                />
                <hr style={{borderTop: '3px solid #8230a3'}}/>
                <h2>Training</h2>
                <Training
                    dateTraining={'12.2014'}
                    nameTraining="Team, Communication and Stakeholder Management - trainings accredited by the Project Management Institute implemented at PM Experts"
                />
                <Training
                    dateTraining={'12.2014'}
                    nameTraining="Business negotiations - training conducted at House of Skills."
                />
                <Training
                    dateTraining={'12.2014'}
                    nameTraining="Computer-aided AutoCAD design - basic and advanced level."
                />
                <hr style={{borderTop: '3px solid #8230a3'}}/>
                <h2>Additional abilities</h2>
                <AdditionalAbilities
                    additionalabilities={[<ul><li>English - B1,</li><li>AutoCAD</li><li>Photoshop</li><li>Microsoft Office/Open Office,</li><li>Windows/Linux,</li><li>Driving license category B.</li></ul>]}
                />
                <hr style={{borderTop: '3px solid #8230a3'}}/>
                <h2>Interests</h2>
                <ul>
                    <li>marketing,</li>
                    <li>body sports,</li>
                    <li>dietetics.</li>
                </ul>
            </div>
        )
    }
}

export default ResumeRight