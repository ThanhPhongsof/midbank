import { Button } from "components/button";
import { Desc, Heading } from "components/common";
import { LayoutContainer } from "components/layout";

const Newsletter = () => {
  return (
    <section className="newslette py-[70px] px-0 lg:px-20 xl:px-[215px]">
      <LayoutContainer>
        <div className="flex flex-col items-center text-center rounded-[20px] newsletter-background py-12">
          <Heading className="mb-4">Subscribe Newsletter</Heading>
          <Desc className="mb-11" maxWidth="w-full md:max-w-[420px]">
            We operate our banking services in many countries around the world.
          </Desc>
          <form autoComplete="off">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-6 pl-9 placeholder:text-white placeholder:text-opacity-50 text-white border-2 border-primary50 border-solid bg-transparent rounded-full w-[332px]"
              />
              <Button
                type="submit"
                kind="primary"
                className="text-base py-6 px-9 w-full md:max-w-max"
              >
                Get Started
              </Button>
            </div>
          </form>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default Newsletter;
