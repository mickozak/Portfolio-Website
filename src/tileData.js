import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import {Link} from 'react-router-dom'

import SideBar from './components/sidebar'

import Resume from './components/resume'

import {BrowserRouter as Router, Route} from 'react-router-dom'

export const mailFolderListItems = (
    <div>

            <Router>
                <SideBar
                    onRequestSideBarChange={this.drawerBtnClickHandler}
                    isSideBarOpen={this.state.isDrawerOpen}
                />


                <Route path={'/resume'} component={Resume} />
            </Router>
            </div>

);
