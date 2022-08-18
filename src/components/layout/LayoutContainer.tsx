type LayoutContainerProps = {
  children: any;
};

const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <div className="flex flex-col justify-center items-center md:px-16 px-6">
      <div className="2xl:max-w-[1440px] mx-auto w-full">{children}</div>
    </div>
  );
  // return <div className="max-w-[1440px] mx-auto px-6">{children}</div>;
};

export default LayoutContainer;
