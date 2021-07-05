import React from "react";
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useActions} from "../../hooks/useAction"
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';
import {data__setCommentID} from "../../store/data/actions";
import {useDispatch} from "react-redux";
// import Alert from '@material-ui/lab/Alert';
// import AlertTitle from '@material-ui/lab/AlertTitle';
import { VariantType, useSnackbar } from 'notistack';

// const theme = createMuiTheme({
//     palette: {
//         primary: {
//             light: '#b0bec5',
//             main: '#78909c',
//             dark: '#546e7a'
//         },
//         secondary: {
//             light: '#80cbc4',
//             main: '#b0bec5',
//             dark: '#4db6ac',
//         },
//     },
// });

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
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '75%',
        },
        button: {
            height: '50px',
            marginBottom: '25px',
        }
    }),
);




export const Form = ({ ...props}) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
   let paramID = {
       id:"",
       comment:"",
       format:"",
    }
    const { data__getCV } = useActions();

    const handleInput = (e: any): void => {
        const value: string = e.target.value;
        paramID.id = value;
        console.log(paramID.id);
    }

    // const handleMsgVariant = (variant: VariantType) => () => {
    //     // variant could be success, error, warning, info, or default
    //     console.log("handleMsgVariant");
    //     return (
    //         enqueueSnackbar('This is a success message!', { variant }))
    // };

    // const success = () => {
    //     Alert.success('Введите ID!');
    // };
    const handleMsgVariant = (variant: VariantType) => () => {
        // variant could be success, error, warning, info, or default
        console.log("handleMsgVariant");
        return (
            enqueueSnackbar('This is a success message!', { variant }))
    };

    const onSubmit = (e: any) => {
        e.preventDefault();

        if (paramID.id.length > 0) {
            dispatch(data__setCommentID(paramID))
            data__getCV(paramID.id);
            console.log("Отправлено!");
            // history.push("/resume/")
            history.push("/rezume/")// ДЛЯ ПЕРЕХОДА НА СТРАНИЦУ, ГДЕ ПОЛУЧАЕМ ДАННЫЕ С ТЕСТОВОГО СЕРВЕРА
        } else {

            handleMsgVariant('warning');
            // alert ("Не заполнен id");
            console.log("Не заполнен id");
            }

            // <Alert severity="warning">This is a warning alert — check it out!</Alert>
    }

    return (

        <div className={classes.ser}>
                <form className={classes.root} noValidate autoComplete="off"  onSubmit={(e:any) => { onSubmit(e) }}>
                <TextField
                    className={classes.textField}
                    id="outlined-full-width"
                    label="Введите:"
                    style={{ margin: '8px 8px 8px 0px' }}
                    placeholder="..."
                    helperText="id или ссылку на резюме"
                    fullWidth
                    onChange={handleInput}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                {/*<ButtonSubmit*/}

                {/*    <ThemeProvider theme={theme}>*/}
                <Button
                        // handleMsgVariant('success')
                        onClick={(e:any) => { onSubmit(e) }}
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    // (e:any) => {
                        // if (e.target.value === "") handleMsgVariant('success')
                        // else

                            // onSubmit(e)
                        // }
                    >Поиск</Button>
                        {/*<ButtonUpload*/}
                        {/*    onClick={(e:any) => { onSubmit(e) }}*/}
                        {/*children="1234" />*/}
                    {/*</ThemeProvider>*/}
                    {/*{ (paramID.id="1") ? <p>123</p> :<p>321</p>}*/}
                    <Button onClick={handleMsgVariant('success')}>Show success snackbar</Button>



                </form>

        </div>

    )
}

