import { FlexBasis } from "components/common";
import { Img } from "components/img";
import HeaderDesc from "./HeaderDesc";
import HeaderGroupButton from "./HeaderGroupButton";
import HeaderHeading from "./HeaderHeading";

const HeaderMain = () => {
  return (
    <div className="pt-32 relative">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="hidden lg:block lg:basis-1/2">
          <Img
            src="/mastercard.png"
            alt="Mastercard"
            width={690}
            height={690}
            className="z-50"
            layout="intrinsic"
          />
        </div>
        <FlexBasis>
          <HeaderHeading />
          <HeaderDesc />
          <HeaderGroupButton />
        </FlexBasis>
      </div>
    </div>
  );
};

export default HeaderMain;
