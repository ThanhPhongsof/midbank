import { FlexBasis, FlexBasisHidden, FlexCenter } from "components/common";
import { LayoutContainer } from "components/layout";
import { AboutBackground, AboutContent } from "./parts/about";

const AboutUs = () => {
  return (
    <section id="about" className="about-us mb-24">
      <LayoutContainer>
        <div className="px-5">
          <FlexCenter>
            <FlexBasisHidden>
              <AboutBackground />
            </FlexBasisHidden>
            <FlexBasis>
              <AboutContent />
            </FlexBasis>
          </FlexCenter>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default AboutUs;
