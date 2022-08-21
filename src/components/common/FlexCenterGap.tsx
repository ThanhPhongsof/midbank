import classNames from "utils/classNames";

type FlexCenterGapProps = {
  children: JSX.Element;
  className?: string;
};
const FlexCenterGap = ({ children, className = "" }: FlexCenterGapProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col xl:flex-row items-center gap-y-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FlexCenterGap;
