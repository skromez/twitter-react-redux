import React from "react";
import Input from "../Input";
import Button from "../Button";
import FormBody from "./style";

const Form = ({ header, checkbox }) => (
  <FormBody>
    <div className="form__container">
      <p className="form__heading"> {header} </p>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Nickname" />
      <Input placeholder="Location" />
      <Button type="submit" filled="true" size="100%">
        Sign Up
      </Button>
    </div>
  </FormBody>
);

export default Form;
