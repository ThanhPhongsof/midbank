import { Layout } from "components/layout";
import { AboutUs, CTA, HowItWork, Newsletter, Testimonial } from "module/main";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <HowItWork />
        <AboutUs />
        <CTA />
        <Testimonial />
        <Newsletter />
      </Layout>
    </>
  );
};

export default Home;
