import Link from "next/link";
import { IFooterGrid } from "services/interface";

const footerGrids = [
  {
    title: "Product",
    links: [
      "Careere",
      "About Us",
      "Insights",
      "PCI Compliance",
      "Integratlons",
      "Pricing",
    ],
  },
  {
    title: "Service",
    links: ["Docs", "Knowledge Base", "System Status", "Tutorials", "Security"],
  },
  {
    title: "FAQ",
    links: ["About", "Leadership", "Press/News", "Careers/Team", "Contact Us"],
  },
];

const FooterGrid = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-[75px] text-left">
      {footerGrids?.map((item: IFooterGrid) => (
        <div
          key={item.title}
          className="flex flex-col items-center lg:items-start"
        >
          <h4 className="text-base font-bold text-white mb-5">{item.title}</h4>
          <div className="flex flex-col gap-y-4 items-center lg:items-start">
            {item.links?.map((item: string) => (
              <Link key={item} href="#!">
                <a className="text-sm text-white text-opacity-60 hover:text-white">
                  {item}
                </a>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterGrid;
