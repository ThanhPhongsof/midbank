import Image from "next/image";

type ImgProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout: "intrinsic" | "fixed" | "responsive" | "fill";
  objectFit?: ImgElementStyle["objectFit"];
  objectPosition?: string;
};

declare type ImgElementStyle = NonNullable<
  JSX.IntrinsicElements["img"]["style"]
>;

const Img = ({
  src,
  alt,
  width,
  height,
  layout,
  objectFit = "cover",
  objectPosition = "center",
}: ImgProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      objectFit={objectFit}
      objectPosition={objectPosition}
    ></Image>
  );
};

export default Img;
