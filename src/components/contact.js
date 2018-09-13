import React, {component} from 'react'

import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends React.Component{
    render () {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Michał Kozak</h2>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CAw61fVws7Kyr0c-O-zB5Z7sFJfFwHgF4zwQ4FDAt4z4hw62"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width:'75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

<div className="contact-list">
    <List>
        <ListItem>
            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fas fa-phone-square" aria-hidden="true"/>+48 739 066 120
            </ListItemContent>
        </ListItem>
        <ListItem>
            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                <i className="fas fa-envelope-square" aria-hidden="true"/>kozak_m@outlook.com
            </ListItemContent>
        </ListItem>
    </List>
</div>


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact