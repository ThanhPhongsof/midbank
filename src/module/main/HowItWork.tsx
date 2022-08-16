import { LayoutContainer } from "components/layout";
import React from "react";
import { IHowItWork } from "services/interface";
import { WorkWrapper } from "./parts/how-it-work";

const workWrappers = [
  {
    src: "/work-img-1.png",
    height: 75,
    title: "Create an Account",
    desc: "We realize ideas from simple toomplex.",
  },
  {
    src: "/work-img-2.png",
    width: 90,
    height: 59,
    title: "Attach Master Card",
    desc: "Attach master card ideas from everything becomes.",
  },
  {
    src: "/work-img-3.png",
    width: 90,
    height: 77,
    title: "Send Money",
    desc: "Send Money ideas from simple toomplex.",
  },
];

const HowItWork = () => {
  return (
    <section id="product" className="how-it-work mb-32">
      <LayoutContainer>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-y-20 gap-x-5 px-2">
          {workWrappers?.map((item: IHowItWork) => (
            <WorkWrapper key={item.title} item={item} />
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
};

export default HowItWork;
