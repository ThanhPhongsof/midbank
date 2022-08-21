import { Badge, Desc, FlexStart, Heading } from "components/common";
import BlogAuthor from "./BlogAuthor";
import BlogPosition from "./BlogPosition";

const BlogContent = () => {
  return (
    <div>
      <Badge>testimonial</Badge>
      <Heading className="!mb-4">Love of Our Customers</Heading>
      <Desc>
        We operate our banking services in many countries around the world.
      </Desc>
      <div className="mb-[76px]"></div>
      <Desc>
        In promotion and advertising, a testimonial or show consists of a
        person's written or spoken statement extolling the virtue of a product.
        The term "testimonial" most commonly applies to the sales-pitches
        attributed to ordinary citizens, whereas the word "endorsement" usually
        applies to pitches by celebrities.
      </Desc>
      <BlogAuthor />
      <BlogPosition />
    </div>
  );
};

export default BlogContent;
