import React, {FC} from 'react';
import s from "../../pages/rezume/index.module.scss"
import {ICV} from "../../models/cv";
import index from "classnames";
import {rootCertificates} from "tls";

interface ICVProps{
  cv: ICV
}

const rez: ICV = {
    "found": 2099341,
    "per_page": 20,
    "page": 0,
    "pages": 250,
    "items": [
        {
            "id": "0123456789abcdef",
            "title": "Начинающий специалист",
            "url": "https://api.hh.ru/resumes/0123456789abcdef",
            "first_name": "Иван",
            "last_name": "Иванов",
            "middle_name": "Иванович",
            "can_view_full_info": true,
            "age": 19,
            "birthday": "05 июня 2002",
            "alternate_url": "http://hh.ru/resume/0123456789abcdef",
            "created_at": "2015-02-06T12:00:00+0300",
            "updated_at": "2015-04-20T16:24:15+0300",
            "area": {
                "id": "1",
                "name": "Москва",
                "url": "https://api.hh.ru/areas/1"
            },
            "certificate": [
                {
                    "achieved_at": "2015-01-01",
                    "owner": null,
                    "title": "тест",
                    "type": "custom",
                    "url": "http://example.com/"
                }
            ],
            "education": {
                "primary": [
                    {
                        "name": "Российский государственный социальный университет, Москва",
                        "name_id": "39420",
                        "organization": "Факультет информационных технологий",
                        "organization_id": null,
                        "result": "Информатика",
                        "result_id": null,
                        "year": 2012
                    }
                ]
            },
            "total_experience": {
                "months": 118
            },
            "experience": [
                {
                    "position": "пастух",
                    "start": "2010-01-01",
                    "end": null,
                    "company": "Рога и копыта",
                    "industries": [
                        {
                            "id": "51.643",
                            "name": "Благоустройство и уборка территорий и зданий"
                        },
                        {
                            "id": "29.503",
                            "name": "Земледелие, растениеводство, животноводство"
                        }
                    ],
                    "company_url": "http://example.com/",
                    "area": {
                        "id": "1",
                        "name": "Москва",
                        "url": "https://api.hh.ru/areas/1"
                    },
                    "company_id": null,
                    "employer": null
                },
                {
                    "start": "2005-01-01",
                    "end": "2009-03-01",
                    "company": "HeadHunter",
                    "area": {
                        "id": "1",
                        "name": "Москва",
                        "url": "https://api.hh.ru/areas/1"
                    },
                    "industries": [
                        {
                            "id": "7.513",
                            "name": "Интернет-компания (поисковики, платежные системы, соц.сети, информационно-познавательные и развлекательные ресурсы, продвижение сайтов и прочее)"
                        }
                    ],
                    "company_url": "http://hh.ru",
                    "company_id": "1455",
                    "employer": {
                        "alternate_url": "http://hh.ru/employer/1455",
                        "id": "1455",
                        "logo_urls": {
                            "90": "http://hh.ru/employer/logo/1455"
                        },
                        "name": "HeadHunter",
                        "url": "https://api.hh.ru/employers/1455"
                    }
                }
            ],
            "gender": {
                "id": "male",
                "name": "Мужской"
            },
            "salary": {
                "amount": 1000000,
                "currency": "RUR",
                "positionWant": "Инженер"
            },
            "photo": {
                "medium": "http://hh.ru/...",
                "small": "http://hh.ru/...",
                "id": "1337"
            },
            "owner": {
                "comments": {
                    "url": "https://api.hh.ru/applicant_comments/123456",
                    "counters": {
                        "total": 7
                    }
                }
            },
            "negotiations_history": {
                "url": "https://api.hh.ru/resumes/0123456789abcdef/negotiations_history"
            },
            "last_negotiation": {
                "employer_state": {
                    "id": "offer",
                    "name": "Предложение о работе"
                },
                "created_at": "2017-08-10T13:09:28+0300"
            }
        }
    ]
}

const item_: any = rez.items[0];


function CV() {

    let opytRaboty: [] =  item_.experience.map(function(val: any, index:number)  {
        let indust: [] = val.industries.map(function (ind:any, x:number) {
            return
                <ul><div key={x.toString()}>
                    <li>{ind.name}</li> </div>
                </ul>

        })
        return <div key={index.toString()}>
            <div className={s.opyt_info_item}>
            <div className={s.opyt_info_left}>
                <p>{(val.start)? "с " : ""} {val.start}</p>
                <p>{(val.end)? "по " : ""} {val.end}</p>
            </div>
            <div className={s.opyt_info_right}>
                <h3>{val.company}</h3>
                <div className={s.city_url}>{val.area.name}, {val.company_url}</div>
                <p>Профессиональная область: {indust}</p>
                <div>{(val.position) ? val.position : <div className={s.city_url}>Должность не указана</div>}</div>

                <hr/>
            </div>
            </div>
            </div>
         } )

    let institute: [] = item_.education.primary.map(function (obr: any) {
        return <div key={obr.toString()}>
            <div className={s.opyt_info_item}>
                <div className={s.opyt_info_left}>
                    <p style={{marginTop:"10 px"}}>{obr.year}</p>
                </div>
                <div className={s.opyt_info_right}>
                    <h3>{obr.name}</h3>
                    <p>{obr.organization}</p>
                    <p>{obr.result}</p>
                </div>
            </div>
        </div>

    })

    let courses: [] = item_.certificate.map(function (cert: any, y:number){
        return <div key={y}>
            <div className={s.opyt_info_item}>
                <div className={s.opyt_info_left}>
                    <p>{cert.achieved_at}</p>
                </div>
                <div className={s.opyt_info_right}>
                     <p>{cert.title}</p>
                    <p>{cert.owner}</p>
                    <p>{cert.url}</p>
                </div>
            </div>

            </div>
    })

    let stazh: any = function years_months (month: number)
    {
        if(month==12) {
            const y1: string = 1 + " год ";
            return y1;
        } else {
            const y: number= Math.floor(month/12);
            const mm: number =(month%12);
            const ym: string = y + (y >= 5 && y <= 20? " лет " : ( y >= 2 && y <= 4 ? " года " : " года ")) + mm + (mm === 1? " месяц" : (mm >= 2 && mm<= 4 ? " месяца" : " месяцев"));
            return ym;
        }
    }
    let dateCreated: any = new Date(item_.created_at)
    let dateUpdated: any = new Date(item_.updated_at)

  return (
    <div className={s.wrap}>
      <div className={s.rezume}>
          <div className={s.rezume_body}>
              <div className={s.base_info}>
                    <div className={s.ava}><img src={"/img/avatar.svg"}/></div>
                    <div className={s.fio}><h2>{item_.last_name + ' ' + item_.first_name + ' ' + item_.middle_name}</h2>
                        <h4>{item_.gender.name = "Мужской" ? "Мужчина" : "Женщина"}, {item_.age} лет, {item_.gender.name = "Мужской" ? "Родился" : "Родилась"} {item_.birthday}</h4>
                        <p>8-937-347-7705</p>
                        <p>Проживает: {item_.area.name}</p>
                    </div>
              </div>

              <div className={s.zhidz}>
                  <span>Желаемая должность и зарплата</span> <hr/>
                  <div className={s.zhdiz_info}>
                    <div className={s.zhdiz_info_left}>
                        <h2>{item_.title}</h2>
                    </div>
                    <div className={s.zhdiz_info_right}>
                       <h1> {item_.salary.amount} {item_.salary.currency = "RUR" ? "руб." : "у.е."}</h1>
                    </div>
                  </div>
              </div>

              <div className={s.zhidz}>
                  <span>Опыт работы - </span>{stazh(item_.total_experience.months)} <hr/>
                  <div className={s.opyt_info}>
                       {opytRaboty}
                  </div>
              </div>

              <div className={s.zhidz}>
                  <span>Образование </span><hr/>
                  <div className={s.opyt_info}>
                      {institute}
                  </div>
              </div>

              <div className={s.zhidz}>
                  <span>Курсы, повышение квалификации </span><hr/>
                  <div className={s.opyt_info}>
                    {courses}
                  </div>
              </div>
        <hr/>
          <div className={s.create_update_date}><span className={s.create_update_date_item}>Cоздано: {(dateCreated.getDate() + '.' + dateCreated.getMonth() + '.' + dateCreated.getFullYear()) + ', в ' + dateCreated.getHours() + ":" + dateCreated.getMinutes()}</span>
              <span className={s.create_update_date_item}>Изменено: {(dateUpdated.getDate() + '.' + dateUpdated.getMonth() + '.' + dateUpdated.getFullYear()) + ', в ' + dateUpdated.getHours() + ":" +dateUpdated.getMinutes()}</span><br/>

          </div>

      </div>
      <div>

      </div>
    </div>
</div>
  );
};

export {CV};
