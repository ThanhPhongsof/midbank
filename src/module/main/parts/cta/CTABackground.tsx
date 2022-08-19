import { Img } from "components/img";

const CTABackground = () => {
  return (
    <div className="group relative flex items-center justify-center">
      <div className="flex justify-center items-center z-50 pointer-events-none">
        <Img
          src="/iphone-img.png"
          width={267}
          height={553}
          layout="intrinsic"
        />
      </div>
      <div className="hidden absolute w-[466px] h-[466px] rounded-full border border-solid border-white/10 md:flex items-center justify-center group-hover:border-white transition-all">
        <div className="w-[402px] h-[402px] rounded-full cta-background-circle"></div>
      </div>
    </div>
  );
};

export default CTABackground;
