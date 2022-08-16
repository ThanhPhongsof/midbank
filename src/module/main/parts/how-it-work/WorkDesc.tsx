type WorkDescProps = {
  children: string;
};

const WorkDesc = (props: WorkDescProps) => {
  return <p className="text-third100">{props.children}</p>;
};

export default WorkDesc;
