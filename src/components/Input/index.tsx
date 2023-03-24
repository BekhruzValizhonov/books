import React, { FC } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Btn from "../Button";

interface InputProps {
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  holder: string;
  className: string;
}

const Input: FC<InputProps> = ({ search, onChange, holder, className }) => {
  return (
    <InputGroup className={className}>
      <Form.Control
        placeholder={holder}
        aria-label={holder}
        value={search}
        onChange={onChange}
      />
      <Btn variant="primary" title="Search" type="submit" />
    </InputGroup>
  );
};

export default Input;
