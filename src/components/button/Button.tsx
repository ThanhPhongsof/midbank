import classNames from "utils/classNames";

type ButtonProps = {
  className?: string;
  type: "button" | "submit" | "reset";
  kind?: string;
  children: string | JSX.Element;
};

const Button = ({
  className = "px-6 py-4",
  type,
  kind = "primary",
  children,
}: ButtonProps) => {
  let ButtonDefault = "";
  switch (kind) {
    case "primary":
      ButtonDefault =
        "text-white bg-gradient-to-r from-primary50 to-primary200";
      break;
    case "secondary":
      ButtonDefault =
        "text-primary50 bg-gradient-to-r from-primary50 to-primary200";
      break;
    case "third":
      ButtonDefault =
        "text-white bg-transparent border-2 border-solid border-white/50";
      break;
    default:
      break;
  }

  return (
    <button
      type={type}
      className={classNames(
        "font-semibold text-lg rounded-full",
        className,
        ButtonDefault
      )}
    >
      {children}
    </button>
  );
};

export default Button;
