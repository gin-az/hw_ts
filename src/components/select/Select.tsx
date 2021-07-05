import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            // margin: theme.spacing(1),
            minWidth: 200,
            margin: '8px 8px 8px 0px',
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export default function SimpleSelect() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };

    return (
        <div>


            <FormControl variant="outlined" className={classes.formControl}>

                <InputLabel id="format">Формат</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"

                    value={age}
                    onChange={handleChange}
                    label="Ajhmat"
                >
                    <MenuItem value={10}>JSON</MenuItem>
                    <MenuItem value={20}>CV IBS без ФИО</MenuItem>
                    <MenuItem value={30}>CV IBS с ФИО</MenuItem>
                </Select>
            </FormControl>

        </div>
    );
}