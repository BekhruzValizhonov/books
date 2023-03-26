import { Router } from "../types/routers";
import Info from "../layouts/infoPage";
import Main from "../layouts/mainPage";
import { RoutesEnum } from "../utils/constants/consts";

const routers: Router[] = [
  {
    key: "main",
    link: RoutesEnum.Home,
    component: <Main />,
  },

  {
    key: "info",
    link: RoutesEnum.Info,
    component: <Info />,
  },
  {
    key: "404",
    link: RoutesEnum.NoPage,
    component: <Main />,
  },
];

export default routers;
