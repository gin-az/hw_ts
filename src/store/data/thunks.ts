import { GetState } from "../index";
import {data__setCommentID, data__setCV} from "./actions";
import {API2, API3} from "../../API";
import {IcommId} from "../../models/comId";
import {ApiCommentID} from "../../API/commentId";

/**
 * Получили резюме
 */
export const data__getCV = (obj: object | string) => async (dispatch: any, getState: GetState) => {
  try {
    const cv = await API2.cv.getAll(obj)
    dispatch(data__setCV(cv))
    console.log(cv)
  }
  catch (e) {
    console.error("Ошибка при запросе...", e)

  }
}

export const data__getRezume = (obj: object | string) => async (dispatch: any, getState: GetState) => {
  try {
    const rezume = await API3.cv.getRezume(obj)
    // dispatch(data__setCV(rezume))
    console.log(rezume)
  }
  catch (e) {
    console.error("Ошибка при запросе...", e)

  }
}

export const data__postCommentID = (obj: object | string) => async (dispatch: any, getState: GetState) => {
  try {
    console.log("DAAAAAAAAAAAAAAAAAAA")
    const commentID = await API3.commentID.postComment(obj)
    dispatch(data__setCommentID(commentID))
    console.log("LFFFFF",commentID)
  }
  catch (e) {
    console.error("Ошибка при запросе...", e)

  }
}