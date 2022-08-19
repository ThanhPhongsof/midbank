import classNames from "utils/classNames";

type ButtonProps = {
  className?: string;
  type: "button" | "submit" | "reset";
  kind?: string;
  children: string | JSX.Element;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({
  className = "px-6 py-4 w-full md:max-w-max",
  type,
  kind = "primary",
  children,
  ...rest
}: ButtonProps) => {
  let ButtonDefault = "";
  switch (kind) {
    case "primary":
      ButtonDefault =
        "text-white bg-gradient-to-r from-primary50 to-primary200 hover:bg-white50 hover:bg-none hover:text-primary50 transition-all";
      break;
    case "secondary":
      ButtonDefault =
        "text-primary50 bg-transparent border-2 border-solid border-primary200/50 hover:bg-white50 hover:border-white50 hover:text-primary50 transition-all";
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
        "font-semibold test-base md:text-lg rounded-full group",
        className,
        ButtonDefault
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
