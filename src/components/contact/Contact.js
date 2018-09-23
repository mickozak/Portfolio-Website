import React, {component} from 'react'

import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Card from '../projects/Card'

class Contact extends React.Component{
    render () {
        return(
            <div className="contact-body">
                <Grid container className="contact-grid">
                    <Grid item col={12}>
                        <h2>Kontakt</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                        <i className="fas fa-phone-square" aria-hidden="true"/>
                                        <ListItemText primary="+48 739 066 120" />
                                </ListItem>
                                <ListItem>
                                        <i className="fas fa-envelope-square" aria-hidden="true"/>
                                        <ListItemText primary="kozak_m@outlook.com" />
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                </Grid>



            </div>
        )
    }
}
export default Contact