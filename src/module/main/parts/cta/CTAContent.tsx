import { Desc, FlexStart, Heading } from "components/common";
import CTAGroupButton from "./CTAGroupButton";

const CTAContent = () => {
  return (
    <FlexStart>
      <Heading className="pt-20 xl:pt-0 mb-4 text-left">
        Secure way to Buy and Sell from Your Mobile App
      </Heading>
      <Desc className="mb-16 text-left">
        Gemini is a licensed New York trust company that mnday underregular bank
        exams and is subject to the cybersecurity audits conducted by the New
        York.
      </Desc>
      <CTAGroupButton />
    </FlexStart>
  );
};

export default CTAContent;
