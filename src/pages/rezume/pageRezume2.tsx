import React from "react";
import s from "./index.module.scss";
import {CommentForm} from "../../components/Form/CommentForm";
import {Rezume} from "../../models/rezume";
import index from "classnames";

interface ICVProps{
    cv: Rezume
}


const rez: Rezume = {
    "id":"12345678901234567890123456789012abcdef",
    "lastName":"Петров",
    "firstName":"Владимир",
    "middleName":"Олегович",
    "age":25,
    "birthDate":"1996-05-11",
    "gender":{"id":"ready","name":"Готов к командировкам"},
    "area":{
        "url":"https://api.hh.ru/areas/2",
        "id":"2",
        "name":"Санкт-Петербург"
    },
    "metro":{
        "lat":55.658147,
        "lng":37.540957,
        "order":19,
        "id":"6.47",
        "name":"Калужская"
    },
    "relocation":null,
    "businessTripReadiness":{
        "id":"ready",
        "name":"Готов к командировкам"
    },
    "contact":
        [
            {
                "verified":true,
                "comment":"",
                "type":{
                    "id":"skype",
                    "name":"Skype"},
                "preferred":true,
                "value":{
                    "valueClassValue": {
                        "country":"7",
                        "city":"123",
                        "number":"4567890",
                        "formatted":"+71234567890"
                    },
                    "stringValue":null
                }
            },
            {
                "verified":null,
                "comment":null,
                "type":{
                    "id":"skype",
                    "name":"Skype"
                },
                "preferred":false,
                "value":{
                    "valueClassValue":null,
                    "stringValue":"applicant@example.com"
                }
            }
        ],
    "site":[
        {
            "url":"echo123",
            "type":
                {
                    "name":"Skype"
                }
        },
        {
            "url":"123456",
            "type":
                {
                    "id":"icq",
                    "name":"ICQ"
                }
        }
    ],
    "title":"Программист Python",
    "photo":
        {
            "small":"https://hh.ru/...",
            "medium":"https://hh.ru/...",
            "id":"1337",
            "description":null
        },
    "portfolio":
        [
            {
                "small":"https://hh.ru/...",
                "medium":"https://hh.ru/...",
                "id":"1337",
                "description":"..."
            }
        ],
    "specialization":
        [
            {
                "id":"1.221",
                "name":"Программирование, Разработка",
                "profareaID":"1",
                "profareaName":"Информационные технологии, интернет, телеком",
                "laboring":false
            },
            {
                "id":"1.89",
                "name":"Интернет",
                "profareaID":"1",
                "profareaName":"Информационные технологии, интернет, телеком",
                "laboring":false
            },
            {
                "id":"1.9",
                "name":"Web инженер",
                "profareaID":"1",
                "profareaName":"Информационные технологии, интернет, телеком",
                "laboring":false
            }
        ],
    "salary":
        {
            "amount":100500,
            "currency":"RUR"
        },
    "employments":
        [
            {"id":"fullDay","name":"Полный день"},
            {"id":"flexible","name":"Гибкий график"}
        ],
    "schedules":
        [
            {"id":"fullDay","name":"Полный день"},
            {"id":"flexible","name":"Гибкий график"}
        ],
    "education": null,
    "language":
        [
            {
                "id":"rus",
                "name":"Русский",
                "level":{
                    "id":"b2",
                    "name":"B2 — Средне-продвинутый"
                }
            },
            {
                "id":"eng",
                "name":"Английский",
                "level":{
                    "id":"b2",
                    "name":"B2 — Средне-продвинутый"
                }
            }
        ],
    "experience":
        [
            {
                "company":"Название работодателя",
                "companyID":"",
                "area":
                    {
                        "url":"https://api.hh.ru/areas/113",
                        "id":"113","name":"Россия"
                    },
                "companyURL":"http://www.rbc.ru",
                "industries":
                    [
                        {
                            "id":"7.540",
                            "name":"Разработка программного обеспечения"
                        },
                        {
                            "id":"9.399",
                            "name":"Мобильная связь"
                        }
                    ],
                "position":"Должность",
                "start":"2005-04-01",
                "end":"2013-01-01",
                "description":"Описание деятельности в компании"
            }
        ],
    "totalExperience":
        {
            "months":94
        },
    "skills":"Дополнительная информация: ключевые навыки",
    "skillSet":["HTML","CSS"],
    "citizenship":
        [
            {
                "url":"https://api.hh.ru/areas/113",
                "id":"113"
                ,"name":"Россия"
            }
        ],
    "workTicket":
        [
            {
                "url":"https://api.hh.ru/areas/113",
                "id":"113",
                "name":"Россия"
            }
        ],
    "travelTime":
        {
            "id":"any",
            "name":"Не имеет значения"
        },
    "recommendation":
        [
            {
                "name":"Петров Петр",
                "position":"старший научный сотрудник",
                "organization":"Роскосмос"
            }
        ],
    "resumeLocale":
        {
            "id":"RU",
            "name":"Русский"
        },
    "certificate":
        [
            {
                "title":"Oracle Certified Java Professional Programmer",
                "achievedAt":"2013-11-01",
                "type":"custom",
                "owner":null,
                "url":"https://example.com/certificate/123456"
            },
            {
                "title":"MCSE: Windows NT 4.0",
                "achievedAt":"1998-05-26",
                "type":"microsoft",
                "owner":"JOHN DOE",
                "url":null
            }
        ],
    "alternateURL":"https://hh.ru/resume/12345678901234567890123456789012abcdef",
    "createdAt":"2013-05-31T14:27:04+0400",
    "updatedAt":"2013-10-17T15:22:55+0400",
    "download":
        {
            "pdf":
                {
                    "url":"https://hh.ru/api_resume_converter/12345678901234567890123456789012abcdef/ФамилияИмяОтчество.pdf?type=pdf"
                },
            "rtf":
                {
                    "url":"https://hh.ru/api_resume_converter/12345678901234567890123456789012abcdef/ФамилияИмяОтчество.rtf?type=rtf"
                }
        },
    "actions":
        {
            "download":
                {
                    "pdf":{
                        "url":"https://hh.ru/api_resume_converter/12345678901234567890123456789012abcdef/ФамилияИмяОтчество.pdf?type=pdf"
                    },
                    "rtf":{
                        "url":"https://hh.ru/api_resume_converter/12345678901234567890123456789012abcdef/ФамилияИмяОтчество.rtf?type=rtf"
                    }
                }
        },
    "hasVehicle": true,
    "driverLicenseTypes":
        [
            {
                "id":"A"
            },
            {
                "id":"B"
            }
        ],
    "hiddenFields":
        [
            {
                "id":"phones",
                "name":"Все указанные в резюме телефоны"
            }
        ],
    "marked":true
}
const rezum: any = rez;
export function PageRez2 () {

    const languages: any =  rezum.language.map(function(lan: any, index:number)  {
        return (<div key={index.toString()}>
                <p><b>{lan.name}</b> - {lan.level.id} - {lan.level.name}</p>
        </div>
        )
      } )
    const specializations: any =  rezum.specialization.map(function(spec: any, index:number) {
     return (
      <li key={index.toString()}>{spec.name}</li>
     )
    })
    const schedules: any = rezum.schedules.map(function (sched: any, index:number) {
        return (
            <span key={index.toString()}> - {sched.name}</span>
        )
    })
    const obschStazh: any = function years_months(month: number) {
        if (month == 12) {
            const y1: string = 1 + " год ";
            return y1;
        } else {
            const y: number = Math.floor(month / 12);
            const mm: number = (month % 12);
            const ym: string = y + (y >= 5 && y <= 20 ? " лет " : (y >= 2 && y <= 4 ? " года " : " года ")) + mm + (mm === 1 ? " месяц" : (mm >= 2 && mm <= 4 ? " месяца" : " месяцев"));
            return ym;
        }
    }
    const opyt: any =  rezum.experience.map(function(val: any, index:number)  {
        let industries: [] = val.industries.map(function (ind:any, y:number) {
            return (
                    <li key={y.toString()}>{ind.name}</li>
            )
        })
        return (
            <div key={index.toString()}>
            <div className={s.opyt_info_item}>
                <div className={s.opyt_info_left}>
                    <p>{(val.start)? "с " : ""} {val.start}</p>
                    <p>{(val.end)? "по " : ""} {val.end}</p>
                </div>
                <div className={s.opyt_info_right}>
                    <h3>{val.company}</h3>
                    <div className={s.city_url}>{val.area.name}, {val.companyURL}</div>
                    <p>Профессиональная область: {industries}</p>
                    <div>{(val.position) ? val.position : <div className={s.city_url}>Должность не указана</div>} </div>
                    {val.description}

                    <hr />
                </div>
            </div>
        </div>
        )
    } )
    const certificates: any = rezum.certificate.map(function (cert: any, index:number) {
        let certDay: any = new Date(cert.achievedAt)
            return (
            <div key={index.toString()}>
                <div className={s.opyt_info_item}>
                    <div className={s.opyt_info_left}>
                        {/*{cert.achievedAt}*/}
                        {(certDay.getDate() + '.' + certDay.getMonth() + '.' + certDay.getFullYear())}
                    </div>
                    <div className={s.opyt_info_right}>
                        <h4>{cert.title}</h4>
                        <div>{cert.type}, {cert.owner}</div>
                    </div>
                </div>
            </div>
        )
    })

    const dateCreated: any = new Date(rezum.createdAt)
    const dateUpdated: any = new Date(rezum.updatedAt)
    const birthDay: any = new Date(rezum.birthDate)


    return (
        <>
            <CommentForm/>
            <div className={s.wrap}>
                <div className={s.rezume}>
                    <div className={s.rezume_body}>
                        <div className={s.base_info}>
                            <div className={s.ava}><img src={"/img/avatar.svg"}/></div>
                            <div className={s.fio}>
                                <h2>
                                    {rezum.lastName + ' ' + rezum.firstName + ' ' + rezum.middleName}
                                </h2>
                                <h4>
                                   {rezum.gender.name = "Мужской" ? "Мужчина" : "Женщина"}, {rezum.age} лет,
                                    {rezum.gender.name = "Мужской" ? " родился " : " родилась "}
                                    {(birthDay.getDate() + '.' + birthDay.getMonth() + '.' + birthDay.getFullYear())}
                                </h4>
                                <p>{rezum.contact[0].type.name}: {rezum.contact[0].value.valueClassValue.formatted}, {rezum.contact[1].value.stringValue}.</p>
                                <span>Проживает:
                                    <span> {rezum.area.name}, м.{rezum.metro.name}</span>
                                </span><br />
                                <span>Гражданство: {rezum.citizenship[0].name}, есть разрешение на работу: {rezum.workTicket[0].name}</span><br/>
                                <span>{rezum.businessTripReadiness.name}</span>

                            </div>
                        </div>

                        <div className={s.zhidz}>
                            <span>Желаемая должность и зарплата</span>
                            <hr/>
                            <div className={s.zhdiz_info}>
                                <div className={s.zhdiz_info_left}>
                                    <h2>{rezum.title}</h2>
                                </div>
                                <div className={s.zhdiz_info_right}>
                                    <h2> {rezum.salary.amount} {rezum.salary.currency = "RUR" ? "руб." : "у.е."}</h2>
                                </div>

                            </div>

                            <div>

                                <p><b>{rezum.specialization[0].profareaName}</b>
                                    {specializations}
                                </p>
                                <p>График работы: {schedules}</p>
                                <p>Желательное время пути до работы: {rezum.travelTime.name}</p>
                                <div>     <p>Рекомендации: {rezum.recommendation[0].name}  ({rezum.recommendation[0].position}) | <b>{rezum.recommendation[0].organization}</b></p></div>
                            </div>
                            {/*<div>График работы: {rezum.employments[0].name}</div>*/}
                        </div>

                        <div className={s.zhidz}>
                            <span>Опыт работы - </span>
                            {obschStazh(rezum.totalExperience.months)}
                            <hr/>
                            <div className={s.opyt_info}>
                                {opyt}
                                {/*{opytRaboty}*/}
                            </div>
                        </div>

                        <div className={s.zhidz}>
                            <span>Образование </span>
                            <hr/>
                            <div className={s.opyt_info}>
                                <i>Данные не указаны.</i>
                            </div>
                        </div>

                        <div className={s.zhidz}>
                            <span>Сертификаты </span>
                            <hr/>
                            <div className={s.opyt_info}>
                                {certificates}
                            </div>
                        </div>
                        <div className={s.zhidz}>
                            <span>Ключевые навыки</span>
                            <hr/>
                            <div className={s.opyt_info}>
                                <div className={s.opyt_info_item}>
                                    <div className={s.opyt_info_left}>
                                        <p style={{marginTop:"10 px"}}>Знание языков</p>
                                    </div>
                                    <div className={s.opyt_info_right}>
                                        {languages}
                                    </div>
                                </div>
                                <div className={s.opyt_info_item}>
                                    <div className={s.opyt_info_left}>
                                        <p style={{marginTop:"10 px"}}>Навыки</p>
                                    </div>
                                    <div style={{marginRight:" 10px"}} className={s.opyt_info_right} >
                                        <p> <span className={s.tags}>{rezum.skillSet[0]}</span> <span className={s.tags}>{rezum.skillSet[1]}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.zhidz}>

                        </div>
                        <hr/>
                        <div className={s.create_update_date}><span
                            className={s.create_update_date_item}>Cоздано:

                               {(dateCreated.getDate() + '.' + dateCreated.getMonth() + '.' + dateCreated.getFullYear()) + ', в ' + dateCreated.getHours() + ":" + dateCreated.getMinutes()}
                            </span>
                            <span className={s.create_update_date_item}>Изменено:
                               {(dateUpdated.getDate() + '.' + dateUpdated.getMonth() + '.' + dateUpdated.getFullYear()) + ', в ' + dateUpdated.getHours() + ":" + dateUpdated.getMinutes()}
                            </span><br/>

                        </div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
}
// export { PageRez2 };