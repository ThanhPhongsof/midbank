import classNames from "utils/classNames";

type BadgeProps = {
  children: string;
  className?: string;
};

const Badge = ({ children, className = "mb-4" }: BadgeProps) => {
  return (
    <span
      className={classNames("badge text-xs font-bold uppercase", className)}
    >
      {children}
    </span>
  );
};

export default Badge;
