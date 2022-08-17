
type FlexBasisHiddenProps = {
  children: JSX.Element;
};

const FlexBasisHidden = (props:FlexBasisHiddenProps) => {
  return (
    <div className="hidden lg:block lg:basis-1/2">
      {props.children}
    </div>
  );
};

export default FlexBasisHidden;