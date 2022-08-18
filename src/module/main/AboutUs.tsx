import { FlexBasis, FlexBasisHidden, FlexCenter } from "components/common";
import { LayoutContainer } from "components/layout";
import { AboutBackground, AboutContent } from "./parts/about";

const AboutUs = () => {
  return (
    <section id="about" className="about-us mb-24">
      <LayoutContainer>
        <FlexCenter>
          <FlexBasisHidden>
            <AboutBackground />
          </FlexBasisHidden>
          <FlexBasis>
            <AboutContent />
          </FlexBasis>
        </FlexCenter>
      </LayoutContainer>
    </section>
  );
};

export default AboutUs;
