import { Desc } from "components/common";
import { LogoDefault } from "components/logo";
import FooterGrid from "./FooterGrid";
import FooterSocial from "./FooterSocial";

const FooterMain = () => {
  return (
    <div className="py-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-y-10">
      <div className="flex flex-col items-center lg:items-start gap-7 text-center lg:text-left">
        <LogoDefault />
        <Desc>
          We operate our banking services in many countries around the world.
        </Desc>
        <FooterSocial />
      </div>
      <FooterGrid />
    </div>
  );
};

export default FooterMain;
