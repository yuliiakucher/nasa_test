import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 800
    },
    paper: {
        height: 300,
        "backgroundImage": "url('https://img5.goodfon.ru/wallpaper/nbig/1/d6/4k-ultra-hd-background-starry-sky-milky-way-stars-space-astr.jpg')",
    },
    typography: {
        marginLeft: 20,
        color: 'white'
    },
    form: {
        margin: 18,
        display: "flex",
        flexDirection: 'column',
        width: 300
    },
    grid: {
        alignSelf: 'center',
        margin: 10,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center'

    },
    buttonNav: {
        width: 70,
        height: 70,
        position: "fixed",
        right: 20,
        bottom: 20,
        borderRadius: '50%',
    },
    formHeader: {
        marginTop: 20
    },
    rootItem: {
        maxWidth: 900,
        margin: 10
    },
    media: {
        height: 500,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    paragraph: {
        display: 'flex',
        flexDirection: "column"
    },
}));
