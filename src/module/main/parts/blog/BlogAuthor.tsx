import { Img } from "components/img";

type BlogAuthorProps = {
  children?: string;
};

const BlogAuthor = ({ children = "Justin Pierre" }: BlogAuthorProps) => {
  return (
    <h4 className="flex items-center gap-1 text-lg font-medium text-[#D2D7E1]">
      {children}
      <span>
        <Img src="/memoji.png" width={36} height={36} layout="intrinsic" />
      </span>
    </h4>
  );
};

export default BlogAuthor;
