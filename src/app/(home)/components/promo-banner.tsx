import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      {...props}
      width={150}
      height={350}
      alt={alt}
      className="h-auto w-full px-5"
      sizes="100vw"
    />
  );
};

export default PromoBanner;
