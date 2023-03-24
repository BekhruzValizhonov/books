import { FC } from "react";
import Button from "react-bootstrap/Button";

interface IBtnProps {
  disabled?: boolean;
  variant: string;
  type: "submit" | "button" | "reset";
  title: string;
  onClick?: () => void;
}

const Btn: FC<IBtnProps> = ({ title, type, variant, disabled, onClick }) => {
  return (
    <Button variant={variant} type={type} title={title} onClick={onClick}>
      {title}
    </Button>
  );
};

export default Btn;
