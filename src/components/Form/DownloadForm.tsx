import React from "react";
import {createMuiTheme, createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {useTypedSelector} from "../../hooks/useTypedSelector";
// import {useDispatch} from "react-redux";
// import {useActions} from "../../hooks/useAction";

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
        ser: {
            display: 'flex',
            justifyContent: 'center',

        },
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            width: "70%",
            alignItems: 'center',
            justifyContent: 'center',
            margin: '150px 0px 50px',
            padding: '10px 20px 0px',

        },
        formControl: {
            // margin: theme.spacing(1),
            minWidth: 200,
            margin: '8px 8px 8px 0px',
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        button: {
            height: '50px',
        },

    }),
);

export const DownloadForm = () => {

    const classes = useStyles();
    // const dispatch = useDispatch();
    const {data} = useTypedSelector(state => state)
    // const { data__getRezume } = useActions();


    let paramFormat = {
        id: (data.commentID) ? data.commentID.id : "",
        comment: (data.commentID)? data.commentID.comment : "",
        format: "",}

    // const handleArea = (e: any): void => {
    //     const value: string = e.target.value;
    //     paramFormat.format = value;
    //
    //     // console.log(paramFormat)
    //     // console.log(paramFormat.comment)
    //     console.log("TARGET_VALUE:",e.target.value)
    //      console.log(paramFormat)
    // }
    const onChangeArea = (e: any): void => {
        paramFormat.format = e.target.value;
        console.log(paramFormat.format);
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        alert('Получите, распишитесь!')
        console.log("Получите, распишитесь!")
        // dispatch(data__setCommentID(paramFormat))
        // data__getRezume(paramFormat);
            paramFormat.format === "10" ? window.open("http://localhost:3008/rezume_json"):
                paramFormat.format === "20" ? window.open("http://localhost:3008/rezume_docx") :
        window.open("http://localhost:3008/rezume_docx_fio")
    }
    console.log(paramFormat)
    return (

            <div className={classes.ser}>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={(e:any) => { onSubmit(e) }}>
            {/*<SimpleSelect />*/}
                    <FormControl variant="outlined" className={classes.formControl}
                    >
                    <InputLabel id="format">Формат</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value="10"
                        // value={age}
                        onChange={onChangeArea}
                        label="Ajhmat"
                    >
                        <MenuItem value="10">
                            <em>JSON</em>
                        </MenuItem>
                        {/*<MenuItem value='10'>JSON</MenuItem>*/}
                        <MenuItem value='20'>CV IBS без ФИО</MenuItem>
                        <MenuItem value='30'>CV IBS с ФИО</MenuItem>
                    </Select>
                    </FormControl>
            <ThemeProvider theme={theme}>
                    <Button onClick={(e:any) => { onSubmit(e) }}
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        // children="UPLOAD"
                    >Загрузить</Button>
                    </ThemeProvider>
                </form>
        </div>
    )
}