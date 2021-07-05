import React from "react";
import {makeStyles, createStyles, Theme, createMuiTheme} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import {data__postCommentID} from "../../store/data/thunks";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {useActions} from "../../hooks/useAction";
import {data__setCommentID} from "../../store/data/actions";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ThemeProvider} from "@material-ui/styles";

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
            // width: "70%",
            marginTop: theme.spacing(1),
            alignItems: 'center',
            justifyContent: 'center',
            margin: '150px 0px 50px',
            padding: '10px 20px 0px',

        },
        area: {
            padding: '20px',
            maxWidth: '90%',
            overflow: 'auto',
        },
        button: {
            height: '50px',
            marginLeft: '10px',
        }
    }),
);


// interface IProps {
//     children: string;}
// export const ButtonComment = ({children, ...props}: IProps) => {
// // export const ButtonComment = () => {
//     return (
//         <Button type="submit" variant="contained" disableElevation {...props}/></Button>
// );
// }


export const CommentForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory()
    const styles = useStyles();
    const { data__postCommentID } = useActions();

    const {data} = useTypedSelector(state => state)

    // if (data.commentID) {const comID = {id: data.commentID.id}}



let paramComment = {
    id: (data.commentID)? data.commentID.id : "",
    comment:"",
    format:"",
}
    const handleInput = (e: any): void => {
        const value: string = e.target.value;
        paramComment.comment = value;
        console.log(paramComment.comment)
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        dispatch(data__setCommentID(paramComment))
        data__postCommentID(paramComment)
        console.log("Отправлено!", paramComment.comment)
        history.push("/download/")
    }

    console.log(paramComment)

    return (
        <div className={styles.ser}>
            <form className={styles.root} noValidate autoComplete="off"  onSubmit={(e:any) => { onSubmit(e) }}>
                <TextareaAutosize className={styles.area}
                rowsMax={4}
                aria-label="maximum height"
                placeholder="Отзыв:"
                defaultValue=""

                onChange={handleInput}/>
                <ThemeProvider theme={theme}>
        <Button onClick={(e:any) => { onSubmit(e) }}
                variant="contained"
                color="primary"
                className={classes.button}>Отправить отзыв</Button>
                </ThemeProvider>
        </form>
            </div>
    );


};