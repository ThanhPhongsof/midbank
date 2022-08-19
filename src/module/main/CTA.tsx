import { LayoutContainer } from "components/layout";
import { CTABackground, CTAContent } from "./parts/cta";

const CTA = () => {
  return (
    <section id="faq" className="cta py-40">
      <LayoutContainer>
        <div className="bg-[#B6B7BB] bg-opacity-10 rounded-[20px] px-6 xl:px-[76px]">
          <div className="flex flex-col xl:flex-row items-center gap-y-20">
            <div className="basis-full xl:basis-1/2">
              <CTAContent />
            </div>
            <div className="basis-full xl:basis-1/2">
              <CTABackground />
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default CTA;
