import { AxiosInstance } from "axios";
import {IcommId} from "../models/comId";

type ICVResponse = IcommId




export class ApiCommentID {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }
    postComment = (comment: object | string) =>
        this.axios
            .post<ICVResponse>("/comment", {params: {comment}})
            .then((d) => d.data);


    // if (response.statusText)
// {params: {param}}
    // getById = (id: number) =>
    //     this.axios.get<ICV>(`/cv/${id}`).then((d) => d.data);
}   //Передаем тип ICV и данные приходят сразу в виде массива.