type FlexStartProps = {
  children: JSX.Element;
};

const FlexStart = (props: FlexStartProps) => {
  return <div className="flex flex-col items-start">{props.children}</div>;
};

export default FlexStart;
