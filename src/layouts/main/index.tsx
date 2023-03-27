import { FC } from "react";
import { observer } from "mobx-react-lite";
import style from "./main.module.css";
import Books from "../books";

const Main: FC = observer(() => {
  return (
    <div className={style.main_container}>
      <Books />
    </div>
  );
});

export default Main;
