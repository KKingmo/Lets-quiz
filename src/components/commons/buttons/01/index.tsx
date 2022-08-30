import { buttonCss } from "./styles";

export default function Button01({
  name,
  disabled,
  onClick,
  type,
  style,
}: {
  name: string;
  disabled?: boolean;
  type?: "button" | "submit";
  onClick?: (...args: any) => void;
  style?: {
    [key: string]: string | number;
  };
}) {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      onClick={onClick && onClick}
      css={[buttonCss.default, buttonCss[name], style]}
    >
      {name}
    </button>
  );
}
