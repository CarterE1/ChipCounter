import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

function Button({ children, onClick }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-primary form-control"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
