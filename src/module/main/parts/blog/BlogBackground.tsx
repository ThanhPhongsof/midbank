import { IBlog } from "services/interface";

type BlogBackgroundProps = {
  image: string;
};

const BlogBackground = (props: BlogBackgroundProps) => {
  return (
    <img
      srcSet={props.image}
      className="w-[308px] h-[300px] md:w-[450px] md:h-[522px] xl:w-full xl:h-full xl:max-w-[340px] xl:max-h-[444px]  rounded-xl object-cover object-center overflow-hidden blog-background"
    />
  );
};

export default BlogBackground;
