import { AppAction, IAppActionTypes } from "./types";
import {IUser} from "../../models/user";
//01:42    action принимает тип user и возвр-ет какой-то тип состоящий из AppAction, т.е все возможные actionы относящиеся к данному разделу (APP)
export const app__setUser = (user: IUser): AppAction => ({
  type: IAppActionTypes.APP__SET_USER,
  payload: user,
});
//Типы указаны в types
