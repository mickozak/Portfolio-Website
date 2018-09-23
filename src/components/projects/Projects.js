import React, {component} from 'react'

import ProjectBasic from './ProjectsBasic'
import ProjectReact from './ProjectsReact'
import ProjectPhotoshop from './ProjectsPhotoshop'
import ProjectJavaScript from './ProjectsJavaScript'

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
});

class Projects extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <Grid>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="HTML/CSS" />
                        <Tab label="JavaScript" />
                        <Tab label="React" />
                        <Tab label="Photoshop"/>
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}><ProjectBasic/></TabContainer>
                    <TabContainer dir={theme.direction}><ProjectJavaScript/></TabContainer>
                    <TabContainer dir={theme.direction}><ProjectReact/></TabContainer>
                    <TabContainer dir={theme.direction}><ProjectPhotoshop/></TabContainer>
                </SwipeableViews>
            </div>
            </Grid>
        );
    }
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Projects);