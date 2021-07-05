import React from 'react';
import s from "./index.module.scss";
// import {useLocation} from "react-router-dom";
import {Footer} from "../footer/Footer";

import {Header} from "../header/Header";
import {Route, Switch } from 'react-router-dom';
import {MENU} from "../../static-data/menu";



const LayoutMain = () => {
  // const {pathname} = useLocation();
  return (

    <div className={s.wrap}>
      <div className={s.fx}>
        <div className={s.bodyWrap}>
          <div className={s.head}>
            <Header/>
          </div>
          {/*{pathname === "/" && (*/}
          {/*  <div className={s.banner}>*/}
          {/*    <Banner/>*/}
          {/*  </div>*/}
          {/*)}*/}

          <div className={s.body} >

            <Switch>
              {MENU.map((item)=>(
                <Route component={item.component} exact={item.exact} key={item.href} path={item.href}/>
              ))}
            </Switch>
          </div>

          <div className={s.footer}>
            <Footer/>
          </div>
        </div>
      </div>
    </div>

  );
};

export {LayoutMain} ;