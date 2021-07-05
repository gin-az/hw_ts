import {IUser} from "../../models/user";
//Типы action'ов
export enum IAppActionTypes {
  APP__INIT_APP = "[APP] INIT_APP",
  APP__SET_USER = "[APP] SET_USER",
}
//Эти ключи используются здесь, в actions и в reducer.

// Типы (интерфесы для ActionCreators
interface SetAuthAction {
  type: IAppActionTypes.APP__SET_USER;
  payload: IUser;
}
//По ключам в Reducer IDE уже знает какой-тип должен быть (в зависимости от переданного ключа через switch)
interface SetInitAppAction {
  type: IAppActionTypes.APP__INIT_APP;
  payload: boolean;
}

// Общий тип Action (объединяем предидущие типы в 1, который может содержать значения обоих типов)
export type AppAction =
  | SetInitAppAction
  | SetAuthAction;
