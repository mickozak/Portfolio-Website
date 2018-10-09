import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 5,
    },
    bigAvatar: {
        width: 250,
        height: 250,
    },
};

function ImageAvatars(props) {
    const { classes } = props;
    return (
        <div className={classes.row}>
            <Avatar
                alt="Michał Kozak"
                src="https://preview.ibb.co/bJZHwe/m_kozak.jpg"
                className={classNames(classes.avatar, classes.bigAvatar)}
            />
        </div>
    );
}

export default withStyles(styles)(ImageAvatars);