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
};

function Button({ children, variant = "dark", onClick }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-" + variant + " form-control"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
