import { FlexCenterGap } from "components/common";
import { LayoutContainer } from "components/layout";
import React from "react";
import { BlogBackground, BlogContent } from "./parts/blog";

const Blog = () => {
  return (
    <section id="blog" className="blog lg:px-[150px]">
      <LayoutContainer>
        <FlexCenterGap className="gap-x-28">
          <BlogBackground />
          <BlogContent />
        </FlexCenterGap>
      </LayoutContainer>
    </section>
  );
};

export default Blog;
