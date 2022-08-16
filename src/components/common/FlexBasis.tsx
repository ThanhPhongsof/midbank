type FlexBasisProps = {
  children: JSX.Element;
};

const FlexBasis = (props: FlexBasisProps) => {
  return <div className="basis-full md:basis-1/2">{props.children}</div>;
};

export default FlexBasis;
