import { Badge, Desc, Heading } from "components/common";

const ServiceContent = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Badge>service</Badge>
      <Heading maxWidth="w-full lg:max-w-[400px] xl:max-w-[440px]">
        Choose Best Service from Our List
      </Heading>
      <Desc maxWidth="w-full md:max-w-[400px]">
        We operate our banking services in many countries around the world.
      </Desc>
    </div>
  );
};

export default ServiceContent;
