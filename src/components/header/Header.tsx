import React from 'react';
import s from "./index.module.scss";
import {Menu} from "../menu/Menu";
import {MENU} from "../../static-data/menu";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.left}>
        <Link to={"/"}> <img src="/img/ibs-logo-white.svg" alt={'ibs_logo'} /></Link>
          <Menu list={MENU} className={s.menu} />
      </div>
      <div className={s.right}>
          <img src="/img/hh.ru-gray__min_.svg" alt={'hh.ru'} />
      </div>
    </div>

  );
};

export {Header};