import { FlexBasis, FlexBasisHidden, FlexCenter } from "components/common";
import { Img } from "components/img";
import HeaderDesc from "./HeaderDesc";
import HeaderGroupButton from "./HeaderGroupButton";
import HeaderHeading from "./HeaderHeading";

const HeaderMain = () => {
  return (
    <div className="pt-32 relative">
      <FlexCenter>
        <FlexBasisHidden>
          <Img
            src="/mastercard.png"
            alt="Mastercard"
            width={690}
            height={690}
            className="z-50"
            layout="intrinsic"
          />
        </FlexBasisHidden>
        <FlexBasis>
          <HeaderHeading />
          <HeaderDesc />
          <HeaderGroupButton />
        </FlexBasis>
      </FlexCenter>
    </div>
  );
};

export default HeaderMain;
