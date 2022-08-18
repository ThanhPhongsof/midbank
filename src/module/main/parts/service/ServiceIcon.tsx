import classNames from "utils/classNames";

type ServiceIconProps = {
  className?: string;
  children: JSX.Element;
  bg: string;
};

const ServiceIcon = ({
  children,
  className = "py-8 px-6",
  bg,
}: ServiceIconProps) => {
  let bgHover = bg.length === 0 ? "group-hover:bg-[#DFC8FF]" : bg;

  return (
    <div
      className={classNames(
        "mb-4 flex items-center border border-solid border-white/20  rounded-full transition-all",
        className,
        bgHover
      )}
    >
      {children}
    </div>
  );
};

export default ServiceIcon;
