import { UseFormRegisterReturn } from "react-hook-form";
import styled from "@emotion/styled";

export default function FormRadio({
  register,
  value,
  name,
}: {
  register?: UseFormRegisterReturn;
  value?: string | number;
  name?: string;
}) {
  return (
    <Li>
      <Label>
        <Input
          {...register}
          type="radio"
          value={value}
          className="inputGroup"
        />
        <span>{name}</span>
      </Label>
    </Li>
  );
}

const Li = styled.li`
  margin-right: 1rem;
`;

const Label = styled.label`
  cursor: pointer;
  span {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: #d4d4d444;
    border-radius: 2rem;
    font-size: 1.25rem;
    color: #00c896;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + span {
    background-color: #00c896;
    color: #fff;
  }
`;
