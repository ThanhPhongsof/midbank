import {
  IconBanking,
  IconBusiness,
  IconCredit,
  IconDeposit,
  IconEducation,
  IconPersonal,
} from "components/icon";
import { LayoutContainer } from "components/layout";
import { IServiceCard } from "services/interface";
import { ServiceCard, ServiceContent } from "./parts/service";

const serviceCards = [
  {
    icon: <IconPersonal />,
    classNameIcon: "py-8 px-6",
    title: "Personal Loan",
    bg: "group-hover:bg-redFunky group-hover:bg-opacity-30",
  },
  {
    icon: <IconBusiness />,
    classNameIcon: "p-6",
    title: "Business Loan",
    bg: "group-hover:bg-linkKa",
  },
  {
    icon: <IconDeposit />,
    classNameIcon: "px-[31px] py-6",
    title: "Online Deposit",
    bg: "group-hover:bg-blueLagoon group-hover:bg-opacity-80",
  },
  {
    icon: <IconBanking />,
    classNameIcon: "px-9 py-6",
    title: "Mobile Banking",
    bg: "group-hover:bg-linkKa",
  },
  {
    icon: <IconCredit />,
    classNameIcon: "px-6 py-[26px]",
    title: "Credit Card",
    bg: "",
  },
  {
    icon: <IconEducation />,
    classNameIcon: "px-6 py-8",
    title: "Education Loan",
    bg: "group-hover:bg-organgeWhite",
  },
];

const Service = () => {
  return (
    <section
      id="service"
      className="service bg-[#B6B7BB] bg-opacity-10 py-[72px]"
    >
      <LayoutContainer>
        <ServiceContent />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-x-8 gap-y-[70px] mt-11">
          {serviceCards?.map((item: IServiceCard) => (
            <ServiceCard key={item.title} item={item} />
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
};

export default Service;
