import React from 'react';
import s from "./index.module.scss";
// import {useTypedSelector} from "../../hooks/useTypedSelector";

const PageAbout = () => {

    return (
<div>
    <div className={s.widgets}>
        <div className={s.widgets_item}>
            <div className={s.widgets_item_wrapper}>
                <div className={s.widgets_item_wrapper_photo}>
                    <img src="/img/analytic.png"/>
                </div>
                <div className={s.widgets_item_wrapper_text}>
                    <div className={s.widgets_item_wrapper_text_name}>
                        Гузель Галиева
                    </div>
                    <div className={s.widgets_item_wrapper_text_description}>
                        Переводчик пожеланий бизнеса в техническую плоскость. Понимает технические ограничения,
                        нюансы работы системы и сложности, возникающие у программистов.
                        Вместе с тем, может говорить с бизнесом, понимать их требования и сразу видеть противоречия.
                    </div>
                </div>
            </div>
                <div className={s.widgets_item_wrapper}>
                    <div className={s.widgets_item_wrapper_photo}>
                    <img src="/img/front-end.png"/>
                </div>
                    <div className={s.widgets_item_wrapper_text}>
                        <div className={s.widgets_item_wrapper_text_name}>
                        Азат Гиндуллин
                    </div>
                        <div className={s.widgets_item_wrapper_text_description}>
                            Отвечает за логичную работу всех компонентов сайта, включая контент, кнопки,
                            изображения, навигацию и внутренние ссылки. Проектирует первичную структуру сайта,
                            работает с требованиями пользователей (заказчиков), то есть отвечает за клиентскую сторону пользовательского интерфейса.
                </div>
            </div>
        </div>

                <div className={s.widgets_item}>
                    <div className={s.widgets_item_wrapper}>
                        <div className={s.widgets_item_wrapper_photo}>
                            <img src="/img/backend.png"/>
                        </div>
                        <div className={s.widgets_item_wrapper_text}>
                            <div className={s.widgets_item_wrapper_text_name}>
                                Николай Гуна
                            </div>
                            <div className={s.widgets_item_wrapper_text_description}>
                                Занимается внутренним обустройством продукта, организует работу приложения, сайтов, хранение данных,
                                передачу информации пользователю и удобную навигацию. То есть отвечает за внутренний функционал и
                                хранение данных.
                            </div>
                        </div>
                    </div>

                    <div className={s.widgets_item_wrapper}>
                        <div className={s.widgets_item_wrapper_photo}>
                            <img src="/img/DevOps.png"/>
                        </div>
                        <div className={s.widgets_item_wrapper_text}>
                            <div className={s.widgets_item_wrapper_text_name}>
                                Айдар Хабиров и Марат Искандаров
                            </div>
                            <div className={s.widgets_item_wrapper_text_description}>
                                Собирают воедино все части, из которых состоит проект. Они знают специфику работы программистов,
                                тестировщиков, системных администраторов и помогают упростить их работу. Они понимают потребности и
                                требования бизнеса, его роль в процессе разработки – и строят процесс с учетом интересов заказчика.
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
);
}
export {PageAbout};