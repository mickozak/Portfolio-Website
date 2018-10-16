import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Hidden, Drawer, CssBaseline, MenuList, MenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'
import Grid from '@material-ui/core/Grid'

import { compose } from 'recompose'

const drawerWidth = 240

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'inline',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('lg')]: {
            position: 'relative',
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,

    },
    nested: {

    },
})

class Layout extends Component {
    state = {
        mobileOpen: false
    }

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen })
    }

    render() {
        const { classes, location: { pathname }, children, pages } = this.props
        const { mobileOpen } = this.state

        const drawer = (
            <div>
                <Hidden smDown>
                    <div className={classes.toolbar} />
                </Hidden>
                <MenuList>
                    <MenuItem component={Link} to="/" selected={'/Portfolio-Website' === pathname}>
                        Home
                    </MenuItem>
                    <MenuItem component={Link} to="/resume" selected={'/Portfolio-Website/resume' === pathname}>
                        Resume
                    </MenuItem>
                    <MenuItem component={Link} to="/project" selected={'/Portfolio-Website/project' === pathname}>
                        Portfolio
                    </MenuItem>
                </MenuList>
            </div>
        )

        return <Grid> <Fragment>
            <CssBaseline/>

            <div className={classes.root}>
                <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap>
                            Michał Kozak - Junior Frontend Developer
                        </Typography>
                    </Toolbar>
                </AppBar>

                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>


                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {children}
                </main>
            </div>
        </Fragment></Grid>
    }
}

export default compose(
    withRouter,
    withStyles(styles)
)(Layout)