type IconArrowLeftProps = {
  onClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};

const IconArrowLeft = ({ onClick }: IconArrowLeftProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon-arrow slider-prev"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
};

export default IconArrowLeft;
