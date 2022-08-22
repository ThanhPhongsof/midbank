import { Badge } from "components/common";
import BlogAuthor from "./BlogAuthor";
import BlogPosition from "./BlogPosition";

type BlogContentProps = {
  title: string;
  desc: string;
  author: string;
  position: string;
};

const BlogContent = (props: BlogContentProps) => {
  return (
    <div className="max-w-[200px] md:max-w-max">
      <Badge>testimonial</Badge>
      <h3 className="font-third font-bold text-3xl md:text-[40px] xl:text-[44px] md:leading-[1.27] mb-4">
        {props.title}
      </h3>
      <p className="text-white text-opacity-60 text-sm md:text-lg font-medium lg:min-w-[320px]">
        {props.desc}
      </p>
      <BlogAuthor>{props.author}</BlogAuthor>
      <BlogPosition>{props.position}</BlogPosition>
    </div>
  );
};

export default BlogContent;
