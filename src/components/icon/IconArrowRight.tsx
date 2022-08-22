import React from "react";

type IconArrowRightProps = {
  onClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};

const IconArrowRight = ({ onClick }: IconArrowRightProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon-arrow slider-next"
      viewBox="0 0 20 20"
      fill="currentColor"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconArrowRight;
