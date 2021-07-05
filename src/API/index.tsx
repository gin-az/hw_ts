import axios, { AxiosInstance } from "axios";
import {ApiCV} from "./cv";
import {ApiCommentID} from "./commentId";

class Api {
  private axios: AxiosInstance;
  cv: ApiCV;
  commentID: ApiCommentID;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
    this.cv = new ApiCV(axios);
    this.commentID = new ApiCommentID(axios);
  }
}
//главный объект для запросов
// let API: Api;
let API2: Api;
let API3: Api;
let API4: Api;
const createAPI = (headers = {}) => {
  // API = new Api(
  //   axios.create({
  //     withCredentials: true,
  //     baseURL: "https://jsonplaceholder.typicode.com",
  //     headers,
  //
  //
  //     // headers: {
  //     //   //  "Authorization": "API_KEY"
  //     // },
  //   })
  // );
  API2 = new Api(
      axios.create({
        baseURL:"http://localhost:3008",
        //   baseURL:"http://group3-front.apps.ocp4.trainee.ru.com/api"
      })
  );

  API3 = new Api(
      axios.create({
        // baseURL:"http://localhost:3008",
        baseURL:"http://group3-front.apps.ocp4.trainee.ru.com/api",

         headers: {}
      })
  );

  API4 = new Api(
      axios.create({
          baseURL:"http://localhost:3008",
          responseType: "document"
    })
  );
};


createAPI({});

export { API2, API3, API4, createAPI };

export enum HTTP_STATUS {
  AppError = 100,
  ServerError = 500,
  Access = 200,
  Error = 400,
  Unauthorized = 401,
  Forbidden = 403,
  BadRequest = 400,
  NotFound = 404,
}
