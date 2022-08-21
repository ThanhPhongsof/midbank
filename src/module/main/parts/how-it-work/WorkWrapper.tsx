import { IHowItWork } from "services/interface";
import WorkDesc from "./WorkDesc";
import WorkHeading from "./WorkHeading";
import WorkImage from "./WorkImage";

type WorkWrapperProps = {
  title: string;
  desc?: string;
  src: string;
  height: number;
};

const WorkWrapper = ({ title, desc = "", src, height }: WorkWrapperProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <WorkImage src={src} width={90} height={height} />
      <WorkHeading>{title}</WorkHeading>
      <WorkDesc>{desc}</WorkDesc>
    </div>
  );
};

export default WorkWrapper;
