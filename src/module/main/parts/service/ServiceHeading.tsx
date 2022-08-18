type ServiceHeadingProps = {
  children: string;
};

const ServiceHeading = (props: ServiceHeadingProps) => {
  return (
    <h3 className="mb-3 text-purple300 text-2xl font-bold group-hover:text-third transition-all">
      {props.children}
    </h3>
  );
};

export default ServiceHeading;
