import { Img } from "components/img";
import Link from "next/link";

const LogoDefault = () => {
  return (
    <Link href="#header">
      <a>
        <Img
          src="/logo.png"
          alt="MidBank"
          width={87}
          height={15}
          layout="intrinsic"
        />
      </a>
    </Link>
  );
};

export default LogoDefault;
