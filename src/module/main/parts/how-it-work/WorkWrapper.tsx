import { IHowItWork } from "services/interface";
import WorkDesc from "./WorkDesc";
import WorkHeading from "./WorkHeading";
import WorkImage from "./WorkImage";

type WorkWrapperProps = {
  item: IHowItWork;
};

const WorkWrapper = ({ item }: WorkWrapperProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <WorkImage src={item.src} width={90} height={item.height} />
      <WorkHeading>{item.title}</WorkHeading>
      <WorkDesc>{item.desc}</WorkDesc>
    </div>
  );
};

export default WorkWrapper;
