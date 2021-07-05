import { combineReducers } from "redux";
import { appReducer } from "./app/reducer";
import {dataReducer} from "./data/reducer";

export enum StoreSection {  //enum дтч прописать ключи
  app = "app",
  data = "data",
}
// Объединяем Reducer.  тип редюсера на 15 строке
export const rootReducer = combineReducers({
  [StoreSection.app]: appReducer, //app - это appReducer(обработчик редьюсера)
  [StoreSection.data]: dataReducer, //data - dataReducer(обработчик редьюсера)
});

export type IRootState = ReturnType<typeof rootReducer>;
  //вывести тип из элемента rootReducer и вернуть его.
