import { Button } from "components/button";
import { IconSideBar } from "components/icon";
import { Img } from "components/img";
import { LogoDefault } from "components/logo";
import { SideBar } from "components/sidebar";
import { useEffect, useRef } from "react";
import { useClickOutSide } from "services/hook";
const debounce = require("lodash.debounce");

const HeaderTop = () => {
  const {
    value: showSideBar,
    setValue: setShowSideBar,
    nodeRef,
  } = useClickOutSide("button");

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerTop = document.querySelector(".header-top");
    window.addEventListener(
      "scroll",
      debounce(function () {
        let headerHeight = headerTop && ref ? ref.current?.offsetHeight : 0;
        if (typeof headerHeight === "undefined") {
          headerHeight = 0;
        }
        const srcollY = window.pageYOffset;
        if (srcollY >= headerHeight) {
          headerTop && headerTop.classList.add("is-fixed");
          document.body.style.paddingTop = `${headerHeight}px`;
        } else {
          headerTop && headerTop.classList.remove("is-fixed");
          document.body.style.paddingTop = `0`;
        }
      }, 100)
    );
  }, []);

  return (
    <div className="relative header-top" ref={ref}>
      <div className="pt-5 pb-3 flex justify-between items-center py-5">
        <LogoDefault />
        <SideBar showSideBar={showSideBar} ref={nodeRef} />
        <Button
          type="button"
          kind="third"
          className=" py-3 px-5 lg:py-4 lg:px-8 overflow-hidden"
        >
          Sign in
        </Button>
        <Button
          type="button"
          className="inline-block py-3 px-8 md:hidden"
          onClick={() => setShowSideBar(!showSideBar)}
        >
          <span className="pointer-events-none">
            <IconSideBar />
          </span>
        </Button>
        <div className="absolute top-3 left-3/4 hidden md:block">
          <Img
            src="/earth-img.png"
            alt="earth"
            width={80}
            height={80}
            layout="intrinsic"
            className="pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
