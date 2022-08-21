import { Img } from "components/img";

const BlogBackground = () => {
  return (
    <div className="relative rounded-xl overflow-hidden max-w-[340px] max-h-[444px] group hover:rotate-[4deg] z-50 transition-all">
      <Img
        src="/blog-img.png"
        width={308}
        height={422}
        layout="intrinsic"
        className="rounded-xl overflow-hidden"
      />
      <div className="border-overplay rounded-xl border-white/10 group-hover:rotate-0 transition-all"></div>
    </div>
  );
};

export default BlogBackground;
