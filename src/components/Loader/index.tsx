import Spinner from "react-bootstrap/Spinner";
import style from "./loader.module.css";
import { FC } from "react";

interface ILoaderProps {
  animation?: "border" | "grow";
  variant: string;
}

const Loader: FC<ILoaderProps> = ({ animation, variant }) => {
  return (
    <Spinner
      animation={animation}
      variant={variant}
      className={style.spinner}
    />
  );
};

export default Loader;
