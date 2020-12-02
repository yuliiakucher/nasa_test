import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import Form from "./Form";
import OneItem from "./OneItem";
import {getData} from "../redux/store";
import {connect} from "react-redux";
import {useStyles} from "./Styles";


const Home = ({getData, data, name, camera, sol, page, isLoading}) => {

    const handleLoad = () => {
        getData(name, camera, sol, page + 1)
    }


    const classes = useStyles();
    return (
        <Grid container direction='column'>
            <Button className={classes.buttonNav} variant='outlined' href='#top'>
                <ArrowUpwardOutlinedIcon/>
            </Button>
            <Grid item xs={12}>
                <Paper elevation={0} square className={classes.paper}>
                    <Typography variant='h1' className={classes.typography}>
                        Discover.
                    </Typography>
                    <Typography variant='subtitle1' className={classes.typography}>
                        Explore the collection of image data gathered by NASA's Curiosity, Opportunity, and Spirit
                        rovers
                    </Typography>
                </Paper>
            </Grid>

            <Grid item xs={12} className={classes.grid} id='top'>
                <Typography variant='h5' className={classes.formHeader}>Please, select all the necessary
                    parameters</Typography>
                <Form getData={getData}/>
            </Grid>
            <Grid item lg={12} className={classes.grid}>
                {isLoading
                    ? <CircularProgress/>
                    : data && data.map(item => (
                    <OneItem
                        key={item.id}
                        item={item}
                    />
                ))
                }
                {data && !data.length && (
                    <Typography variant='h6'>It seems that there is nothing on your request...
                        Please, try other parameters</Typography>
                )}

            </Grid>
            <Grid item lg={12} className={classes.grid}>
                <Button variant='contained' color='secondary' onClick={handleLoad} disabled={data && data.length < 25}>Load
                    more...</Button>
            </Grid>
        </Grid>


    )
}

let mapStateToProps = (state) => {
    return {
        data: state.data,
        name: state.name,
        camera: state.camera,
        sol: state.sol,
        page: state.page,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {getData})(Home)
