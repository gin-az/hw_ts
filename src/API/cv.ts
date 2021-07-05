import { AxiosInstance } from "axios";
import {ICV} from "../models/cv";

type ICVResponse = ICV

export class ApiCV {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }
    getAll = (id: object | string) =>
        this.axios
            .get<ICVResponse>("/resume", {params: {id}})
            .then((d) => d.data);

    getRezume = (format: object | string) =>
        this.axios
            .get<ICVResponse>("/rezume", {params: {format}})
            .then((d) => d.data);



    postComment = (comment: object | string) =>
        this.axios
            .post<ICVResponse>("/comment", {params: {comment}})
            .then((d) => d.data);


    // if (response.statusText)
// {params: {param}}
    // getById = (id: number) =>
    //     this.axios.get<ICV>(`/cv/${id}`).then((d) => d.data);
}   //Передаем тип ICV и данные приходят сразу в виде массива.