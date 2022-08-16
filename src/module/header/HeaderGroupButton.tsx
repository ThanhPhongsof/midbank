import { Button } from "components/button";
import { IconDownload } from "components/icon";

const HeaderGroupButton = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-14">
      <Button type="button">Start Transaction</Button>
      <Button
        type="button"
        kind=""
        className="group flex items-center gap-3 text-white text-opacity-50 !font-medium hover:text-white"
      >
        <span className="bg-white/50 group-hover:bg-white rounded-full w-6 h-6 flex justify-center items-center">
          <IconDownload />
        </span>
        Download App
      </Button>
    </div>
  );
};

export default HeaderGroupButton;
