import classNames from "utils/classNames";

type DescProps = {
  children: string;
  className?: string;
};

const Desc = ({ children, className = "mb-4" }: DescProps) => {
  return (
    <p
      className={classNames(
        "text-white text-opacity-60 text-lg font-medium width-content",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Desc;
