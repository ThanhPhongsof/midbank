import { IServiceCard } from "services/interface";
import ServiceDesc from "./ServiceDesc";
import ServiceHeading from "./ServiceHeading";
import ServiceIcon from "./ServiceIcon";

type ServiceCardProps = {
  item: IServiceCard;
};

const ServiceCard = (prop: ServiceCardProps) => {
  return (
    <div className="group flex flex-col items-center bg-white bg-opacity-10 border border-solid border-third/20 py-14 rounded-md relative max-w-[313px] max-h-[313px] hover:rotate-3 hover:bg-white z-50 transition-all">
      <ServiceIcon bg={prop.item.bg} className={prop.item.classNameIcon}>
        {prop.item.icon}
      </ServiceIcon>
      <ServiceHeading>{prop.item.title}</ServiceHeading>
      <ServiceDesc></ServiceDesc>
      <div className="border-overplay rounded-md border-[#FFFFFF1A] group-hover:rotate-0 transition-all"></div>
    </div>
  );
};

export default ServiceCard;
