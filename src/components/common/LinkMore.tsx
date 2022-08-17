import Link from "next/link";
import classNames from "utils/classNames";

type LinkProps = {
  children: string;
  className?: string;
};

const LinkMore = ({ children, className = "" }: LinkProps) => {
  return (
    <Link href="#!">
      <a
        className={classNames(
          "text-[#EEA153] text-xs font-semibold hover:text-green transition-colors duration-300",
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default LinkMore;
