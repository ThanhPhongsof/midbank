import { Button } from "components/button";
import { Img } from "components/img";
import { LogoDefault } from "components/logo";
import { SideBar } from "components/sidebar";

const HeaderTop = () => {
  return (
    <div className="relative">
      <div className="pt-5 pb-3 flex justify-between items-center py-5">
        <LogoDefault />
        <SideBar />
        <Button
          type="button"
          kind="third"
          className="py-4 px-8 overflow-hidden"
        >
          Sign in
        </Button>
        <div className="absolute top-3 left-3/4 ">
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
