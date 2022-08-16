type LayoutContainerProps = {
  children: any;
};

const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <div className="flex justify-center items-center md:px-16 px-6">
      <div className="2xl:max-w-[1440px] mx-auto w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default LayoutContainer;
