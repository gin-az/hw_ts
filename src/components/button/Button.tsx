import React, {useEffect} from "react";
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import { GetState } from '../src/';


import {data__getCV} from "../../store/data/thunks";
import {app__initApp} from "../../store/app/thunks";
import {useActions} from "../../hooks/useAction";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#b0bec5',
            main: '#78909c',
            dark: '#546e7a'
        },
        secondary: {
            light: '#80cbc4',
            main: '#b0bec5',
            dark: '#4db6ac',
        },
    },
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            height: '50px',
},
        root2: {
            display: 'flex',
            flexWrap: 'wrap',
            height: '50px',
            marginBottom: '25px',
        }
    }),
);




export function ButtonSubmit() {
    const classes = useStyles();
    const {data__getCV} = useActions();
    return (
        <ThemeProvider theme={theme}>
    <Button
    //     onClick={() => { data__getCV("123")
    // console.log("Отправлено")}}

            variant="contained" color="primary" className={classes.root2}>
        Поиск
    </Button>
        </ThemeProvider>
    )
}


export const ButtonUpload = ({children, ...props}: any | string) => {
// ({children, ...props}: any | string) {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>

        <Button
            variant="contained"
            color="primary"
            className={classes.root}
            children ="1" />

        </ThemeProvider>
    )
}



