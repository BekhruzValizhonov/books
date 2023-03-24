import { FC } from "react";
import Form from "react-bootstrap/Form";

interface ISortSelectProps {
  value: string;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

const Select: FC<ISortSelectProps> = ({
  className,
  onChange,
  value,
  children,
}) => {
  return (
    <Form.Select
      aria-label="Default select example"
      className={className}
      value={value}
      onChange={onChange}
    >
      {children}
    </Form.Select>
  );
};

export default Select;
