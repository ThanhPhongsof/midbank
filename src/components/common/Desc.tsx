import classNames from "utils/classNames";

type DescProps = {
  children: string;
  className?: string;
  maxWidth?: string;
};

const Desc = ({
  children,
  className = "mb-4",
  maxWidth = "width-content",
}: DescProps) => {
  return (
    <p
      className={classNames(
        "text-white text-opacity-60 text-lg font-medium",
        className,
        maxWidth
      )}
    >
      {children}
    </p>
  );
};

export default Desc;
