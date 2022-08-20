import { FooterBottom, FooterMain } from "module/footer";
import React from "react";
import LayoutContainer from "./LayoutContainer";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <LayoutContainer>
          <FooterMain />
        </LayoutContainer>
      </div>
      <div className="bg-third py-5">
        <LayoutContainer>
          <FooterBottom />
        </LayoutContainer>
      </div>
    </footer>
  );
};

export default Footer;
