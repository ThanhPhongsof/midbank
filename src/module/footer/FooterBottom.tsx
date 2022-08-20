import Link from "next/link";

const FooterBottom = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-y-10 text-center">
      <h5 className="text-white text-opacity-70">
        © 2021 MidBank Mobile Banking <br className="lg:hidden"></br>I All
        Rights Reserved
      </h5>
      <div className="flex items-center gap-10">
        <Link href="#!">
          <a className="footer-bottom-link">Platform</a>
        </Link>
        <Link href="#!">
          <a className="footer-bottom-link">Products</a>
        </Link>
        <Link href="#!">
          <a className="footer-bottom-link">Resources</a>
        </Link>
      </div>
    </div>
  );
};

export default FooterBottom;
