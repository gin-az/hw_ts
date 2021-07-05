import React from 'react';
import s from "./index.module.scss";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {TextArea} from "../../components/textarea/Textarea";
import SimpleSelect from "../../components/select/Select";
import {ButtonUpload} from "../../components/button/Button";
import { CommentForm} from "../../components/Form/CommentForm";

//В ЭТОМ ФАЙЛЕ ОПИСАНА ОТРИСОВКА СТРАНИЦЫ ПРИ ИСПОЛЬЗОВАНИИ ЛОКАЛЬНОГО ВЕБ-С

 const PageRez = () => {
    const {data} = useTypedSelector(state => state)

    if (!data.cv) return <div className={s.vcentre}>Здесь будет отображаться резюме!!!</div>;
    else {
        const rezum: any = data.cv;



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
    };
 }

 export {PageRez};