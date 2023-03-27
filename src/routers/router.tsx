import { Router } from "@/types/routers";
import Info from "@/layouts/info";
import Main from "@/layouts/main";
import { RoutesEnum } from "@/utils/constants/consts";
import Books from "@/layouts/books";

const routers: Router[] = [
  {
    key: "info",
    link: RoutesEnum.Info,
    component: <Info />,
  },
  {
    key: "books",
    link: RoutesEnum.Books,
    component: <Books />,
  },
  {
    key: "404",
    link: RoutesEnum.NoPage,
    component: <Main />,
  },
];

export default routers;
