import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


const styles = {
    card: {
        maxWidth: 300,
    },
    media: {
        height: 340,
    },
    mediaImg:{
        objectFit: 'cover',
    },
};

function ImgMediaCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card} style={{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
            <CardActionArea >
                <CardMedia
                    className={classes.mediaImg}
                    height="150"
                    component="img"
                    image={props.img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.projectName}
                    </Typography>
                    <Typography component="p">
                        {props. projectDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions style={{alignSelf:'flex-end'}}>

                <Button size="small" color="primary" href={props.github}>
                    GITHUB
                </Button>
                <Button size="small" color="primary" href={props.livedemo}>
                    LIVE DEMO
                </Button>

            </CardActions>
        </Card>
    );
}

ImgMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);