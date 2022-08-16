import { Button } from "components/button";
import { IconSideBar } from "components/icon";
import { Img } from "components/img";
import { LogoDefault } from "components/logo";
import { SideBar } from "components/sidebar";
import { useClickOutSide } from "services/hook";

const HeaderTop = () => {
  const {
    value: showSideBar,
    setValue: setShowSideBar,
    nodeRef,
  } = useClickOutSide("button");

  return (
    <div className="relative">
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
