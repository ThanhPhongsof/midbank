import classNames from "utils/classNames";

type HeadingProps = {
  children: string;
  className?: string;
  maxWidth?: string;
};

const Heading = ({
  children,
  className = " mb-11",
  maxWidth = "width-content",
}: HeadingProps) => {
  return (
    <h3
      className={classNames(
        "font-third font-bold text-[44px] leading-[1.27]",
        className,
        maxWidth
      )}
    >
      {children}
    </h3>
  );
};

export default Heading;
