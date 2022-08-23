import { Img } from "components/img";
import { ILogoAbout } from "services/interface";
import classNames from "utils/classNames";

const logoAbouts = [
  {
    src: "/cart-icon.png",
    className: "top-[58px] left-[58px]",
  },
  {
    src: "/phone-icon.png",
    className: "top-[10px] right-[140px]",
  },
  {
    src: "/lock-icon.png",
    className: "right-[28px]",
  },
  {
    src: "/badge-icon.png",
    className: "bottom-0 right-[90px]",
  },
  {
    src: "/chart-icon.png",
    className: "bottom-0 left-[75px]",
  },
  {
    src: "/home-icon.png",
    className: "left-[24px]",
  },
];

const AboutBackground = () => {
  return (
    <div className="w-[589px] h-[589px] border border-purple50/10 about-background relative about-large">
      <div className="w-[479px] h-[479px] border-2 border-purple100/10 about-background">
        <div className="w-[379px] h-[379px] border-2 border-purple200/10 about-background">
          <Img
            src="/about-us-img.png"
            width={280}
            height={388}
            layout="intrinsic"
          />
        </div>
      </div>
      {logoAbouts?.map((item: ILogoAbout) => (
        <div key={item.src} className={classNames("absolute", item.className)}>
          <Img src={item.src} width={60} height={80} layout="intrinsic" />
        </div>
      ))}
    </div>
  );
};

export default AboutBackground;
