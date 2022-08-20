import { Img } from "components/img";
import { IFooterSocial } from "services/interface";
import classNames from "utils/classNames";

type FooterSocialItemProps = {
  item: IFooterSocial;
};

const FooterSocialItem = ({ item }: FooterSocialItemProps) => {
  const classItem = item.kind
    ? "bg-transparent border border-solid border-purple500"
    : "bg-white";

  return (
    <div
      className={classNames(
        "rounded-full w-[38px] h-[38px] flex items-center justify-center",
        classItem
      )}
    >
      <Img src={item.src} width={16} height={16} layout="intrinsic" />
    </div>
  );
};

export default FooterSocialItem;
