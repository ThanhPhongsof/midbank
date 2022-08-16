type WorkHeadingProps = {
  children: string;
};

const WorkHeading = (props: WorkHeadingProps) => {
  return <h4 className="text-2xl font-semibold mb-3">{props.children}</h4>;
};

export default WorkHeading;
