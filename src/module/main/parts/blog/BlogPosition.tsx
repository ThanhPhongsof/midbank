type BlogPositionProps = {
  children?: string;
};

const BlogPosition = ({ children = "UX/UI Derigner" }: BlogPositionProps) => {
  return <h5 className="text-sm text-[#777E90]">{children}</h5>;
};

export default BlogPosition;
