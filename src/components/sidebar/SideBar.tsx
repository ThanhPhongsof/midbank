import Link from "next/link";
import { ISideBar } from "services/interface";

const sidebarList = [
  { title: "Product", link: "#product" },
  { title: "About", link: "#about" },
  { title: "FAQ", link: "#faq" },
  { title: "Service", link: "#service" },
  { title: "Blog", link: "#blog" },
];

const SideBar = () => {
  return (
    <ul className="header-sidebar">
      {sidebarList?.map((item: ISideBar) => (
        <li key={item.title}>
          <Link href={item.link}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
