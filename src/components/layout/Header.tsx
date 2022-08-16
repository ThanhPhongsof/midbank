import { HeaderMain, HeaderTop } from "module/header";
import React from "react";
import LayoutContainer from "./LayoutContainer";

const Header = () => {
  return (
    <header id="#header" className="header mb-32">
      <LayoutContainer>
        <HeaderTop />
      </LayoutContainer>
      <div className="border-b-2 border-solid border-b-white/50"></div>
      <LayoutContainer>
        <HeaderMain />
      </LayoutContainer>
      <LayoutContainer>
        <div className="top-[5%] bg-[url('../images/header-blur-img.png')] header-blur bg-cover rotate-12"></div>
        <div className="top-[20%] bg-[url('../images/header-blur-img-02.png')] header-blur bg-opacity-10 bg-cover rounded-full"></div>
      </LayoutContainer>
    </header>
  );
};

export default Header;
