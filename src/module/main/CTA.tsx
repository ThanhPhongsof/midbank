import { FlexBasis, FlexCenterGap } from "components/common";
import { LayoutContainer } from "components/layout";
import { CTABackground, CTAContent } from "./parts/cta";

const CTA = () => {
  return (
    <section id="faq" className="cta py-40">
      <LayoutContainer>
        <div className="bg-[#B6B7BB] bg-opacity-10 rounded-[20px] px-6 xl:px-[76px]">
          <FlexCenterGap>
            <FlexBasis>
              <CTAContent />
            </FlexBasis>
            <FlexBasis>
              <CTABackground />
            </FlexBasis>
          </FlexCenterGap>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default CTA;
