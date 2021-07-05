import {PageIndex} from "../pages/index/PageIndex";
import {PageAbout} from "../pages/about/PageAbout";
import {PageRez} from "../pages/rezume/pageRezume";
import {PageDownload} from "../pages/download/pageDownload";
import {PageRez2} from "../pages/rezume/pageRezume2";



export interface IMenu{
  id: number
  component: any
  label: string
  href: string
  exact?: boolean
}

export const PAGE_REZ: IMenu = {
  id: 3,
  label: "Резюме",
  href: "/cv/",
  component: PageRez

}

export const MENU: Array<IMenu> = [
  {
    id: 1,
    label: "Главная",
    href: "/",
    exact: true,
    component: PageIndex
  },
  {
    id: 3,
    label: "Резюме",
    href: "/resume/",
    component: PageRez
  },
  {
    id: 4,
    label: "Загрузка",
    href: "/download/",
    component: PageDownload
  },
  {
    id: 5,
    label: "О нас",
    href: "/about/",
    component: PageAbout
  },
  { //LOCAL
    id: 6,
    label: "Резюме (local)",
    href: "/rezume/",
    component: PageRez2
  },
]