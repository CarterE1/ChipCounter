import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant:
    | "primary"
    | "secondary"
    | "dark"
    | "light"
    | "success"
    | "danger"
    | "warning"
    | "info";
  onClick: () => void;
  className?: string;
};

function Button({
  children,
  variant = "dark",
  onClick,
  className = "",
}: Props) {
  return (
    <button
      type="button"
      className={"btn btn-" + variant + " form-control " + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
