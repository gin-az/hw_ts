import React from 'react';
import s from "./index.module.scss";
import {Form} from "../../components/Form/Form";
import { SnackbarProvider } from 'notistack';

export const param: string = "123";
const PageIndex = () => {
    return (
<>

        <div className={s.wrap}>
            {/*<PageRez/>*/}
            <SnackbarProvider maxSnack={3}>
            <Form />
            </SnackbarProvider>
        </div>
    <div>
    </div>


        {/*<CV />*/}
        {/*<PageRez />*/}
</>
    );
};

export {PageIndex};