import {DataAction, IDataActionTypes} from "./types";
import {ICV} from "../../models/cv";
import {IcommId} from "../../models/comId";



/**
 * Записать CV в store
 * @param cv
 */
export const data__setCV = (cv: ICV | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_CV,
  payload: cv,
})

export const data__setCommentID = (commentID: IcommId | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_COMMENTID,
  payload: commentID,
})

