import { UseFormRegisterReturn } from "react-hook-form";

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
    <li>
      <label>
        <input {...register} type="radio" value={value} />
        {name}
      </label>
    </li>
  );
}
