import {DataAction, IDataActionTypes} from "./types";
import {ICV} from "../../models/cv";
import {IcommId} from "../../models/comId";
import {Rezume} from "../../models/rezume";

const initialState = {
  cv: null as ICV | null,
  cvrez: null as Rezume | null,
  commentID: null as IcommId | null,
};
type IDataState = typeof initialState;

export const dataReducer = (
  state = initialState,
  action: DataAction
): IDataState => {
  switch (action.type) {
    case IDataActionTypes.DATA__SET_CV:
      return { ...state, cv: action.payload };
    case IDataActionTypes.DATA__SET_COMMENTID:
      return  { ...state, commentID: action.payload }

    default:
      return state;
  }
};
