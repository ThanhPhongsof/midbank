type LayoutContainerProps = {
  children: any;
};

const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return <div className="max-w-[1440px] mx-auto px-6">{children}</div>;
};

export default LayoutContainer;
