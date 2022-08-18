import { Badge, Desc, Heading } from "components/common";

const ServiceContent = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Badge>service</Badge>
      <Heading>Choose Best Service from Our List</Heading>
      <Desc className="w-full md:max-w-[400px]">
        We operate our banking services in many countries around the world.
      </Desc>
    </div>
  );
};

export default ServiceContent;
