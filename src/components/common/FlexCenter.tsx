type FlexCenterProps = {
  children: JSX.Element;
};

const FlexCenter = (props: FlexCenterProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      {props.children}
    </div>
  );
};

export default FlexCenter;
