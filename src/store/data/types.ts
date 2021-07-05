import {ICV} from "../../models/cv";
import {IcommId} from "../../models/comId";

export enum IDataActionTypes {
  DATA__SET_PHOTOS = "[DATA] SET_PHOTOS",
  DATA__SET_PHOTO = "[DATA] SET_PHOTO",
  DATA__SET_CV = "[DATA] SET_CV",
  DATA__SET_COMMENTID = "[DATA] SET_COMMENTID",
}

// Типы ActionCreators

interface SetCVAction {
  type: IDataActionTypes.DATA__SET_CV;
  payload: ICV | null;

}

interface SetCommentIdAction {
  type: IDataActionTypes.DATA__SET_COMMENTID;
  payload: IcommId | null;
}

// Общий тип для Action
export type DataAction =
  | SetCVAction
  | SetCommentIdAction;
