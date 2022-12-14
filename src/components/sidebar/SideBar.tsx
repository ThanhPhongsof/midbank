import Link from "next/link";
import React, { useEffect } from "react";
import { ISideBar } from "services/interface";

const sidebarList = [
  { title: "Product", link: "#product" },
  { title: "About", link: "#about" },
  { title: "FAQ", link: "#faq" },
  { title: "Service", link: "#service" },
  { title: "Blog", link: "#blog" },
];

type SideBarProps = {
  showSideBar: boolean;
};

const SideBar = React.forwardRef(
  ({ showSideBar }: SideBarProps, ref: React.LegacyRef<HTMLUListElement>) => {
    const expandClass = "is-expand";

    useEffect(() => {
      const sideBar = document.querySelector(".header-sidebar");
      const overlay = document.createElement("div");
      overlay.setAttribute("id", "overlay");
      overlay.classList.add("overplay");
      if (showSideBar) {
        sideBar?.classList.add(expandClass);
        document.body.appendChild(overlay);
      } else {
        const overlayWrapper = document.getElementById("overlay");
        overlayWrapper?.parentNode?.removeChild(overlayWrapper);
        sideBar?.classList.remove(expandClass);
      }
    }, [showSideBar]);

    return (
      <ul className="header-sidebar" ref={ref}>
        {sidebarList?.map((item: ISideBar) => (
          <li key={item.title}>
            <Link href={item.link}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
);

export default SideBar;
