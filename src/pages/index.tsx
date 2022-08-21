import { Layout } from "components/layout";
import {
  AboutUs,
  Blog,
  CTA,
  HowItWork,
  Newsletter,
  Service,
} from "module/main";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <main className="main">
          <HowItWork />
          <AboutUs />
          <Service />
          <CTA />
          <Blog />
          <Newsletter />
        </main>
      </Layout>
    </>
  );
};

export default Home;
