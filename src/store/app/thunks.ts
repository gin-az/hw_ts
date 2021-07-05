import { GetState } from "../index";
import {IAppActionTypes} from "./types";
import {data__setCommentID} from "../data/actions";

/**
 * Инициализвация приложения (т.к. вызывается в UseEffect) в components app
 */
export const app__initApp = () => (dispatch: any, getState: GetState) => {
  dispatch(data__setCommentID( {id: "", comment:"", format:"", }))
  dispatch({ type: IAppActionTypes.APP__INIT_APP, payload: true }); //передаем в Store APP__INIT_APP, что наше приложение инициализировано.
};
