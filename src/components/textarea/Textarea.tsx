import React from "react";
import TextareaAutosize from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            width: "90%",
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '25ch',
        },
    }),
);

export function TextArea() {
    const classes = useStyles();
return (
    <textarea rows={5} className={classes.root}></textarea>
)
}