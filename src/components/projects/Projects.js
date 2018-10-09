import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import ProjectBasic from './ProjectsBasic'
import ProjectReact from './ProjectsReact'
import ProjectPhotoshop from './ProjectsPhotoshop'
import ProjectJavaScript from './ProjectsJavaScript'

function TabContainer(props) {
  return (
    <Typography component="div">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="HTML/CSS"/>
            <Tab label="JavaScript"/>
            <Tab label="React"/>
            <Tab label="Ps"/>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><ProjectBasic/></TabContainer>}
        {value === 1 && <TabContainer><ProjectJavaScript/></TabContainer>}
        {value === 2 && <TabContainer><ProjectReact/></TabContainer>}
        {value === 3 && <TabContainer><ProjectPhotoshop/></TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);