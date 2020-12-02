import React from "react";
import clsx from 'clsx';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStyles} from "./Styles";


const OneItem = ({item}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.rootItem}>
            <CardMedia className={classes.media} component="img" src={item.img_src}/>

            <CardActions>
                <Typography align='right' display='inline' color='secondary'>Show more</Typography>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>

                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant='h5' color='primary'>General information</Typography>
                    <Typography>Camera name: {item.camera.full_name}</Typography>
                    <Typography>Earth date: {item.earth_date}</Typography>
                    <Typography variant='h6' color='primary'>Rover details</Typography>
                    <Typography>Name: {item.rover.name}</Typography>
                    <Typography>Landing date: {item.rover.landing_date}</Typography>
                    <Typography>Launch date: {item.rover.launch_date}</Typography>
                    <Typography>Status: {item.rover.status}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default OneItem
