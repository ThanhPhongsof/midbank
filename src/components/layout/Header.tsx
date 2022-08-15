import { HeaderMain, HeaderTop } from "module/header";
import React from "react";
import LayoutContainer from "./LayoutContainer";

const Header = () => {
  return (
    <header id="#header" className="header h-[780px]">
      <LayoutContainer>
        <HeaderTop />
        <HeaderMain />
      </LayoutContainer>
    </header>
  );
};

export default Header;
