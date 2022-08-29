export default function Button01({
  name,
  disabled,
  onClick,
  type,
}: {
  name: string;
  disabled?: boolean;
  type?: "button" | "submit";
  onClick?: (...args: any) => void;
}) {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      onClick={onClick && onClick}
    >
      {name}
    </button>
  );
}
