import classNames from "utils/classNames";

type HeadingProps = {
  children: string;
  className?: string;
};

const Heading = ({ children, className = " mb-11" }: HeadingProps) => {
  return (
    <h3
      className={classNames(
        "font-third font-bold text-[44px] leading-[1.27] width-content",
        className
      )}
    >
      {children}
    </h3>
  );
};

export default Heading;
