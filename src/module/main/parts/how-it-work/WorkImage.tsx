import { Img } from "components/img";

type WorkImageProps = {
  src: string;
  width?: number | 90;
  height: number;
};

const WorkImage = (props: WorkImageProps) => {
  return (
    <div className="px-[30px] py-[38px] bg-gradient-to-b from-primary300/10 via-primary300/10 to-white50/10 rounded-[18px] border border-solid border-white50/10 overflow-hidden mb-8 flex items-center w-[150px] h-[150px]">
      <Img
        src={props.src}
        width={props.width}
        height={props.height}
        layout="intrinsic"
      />
    </div>
  );
};

export default WorkImage;
