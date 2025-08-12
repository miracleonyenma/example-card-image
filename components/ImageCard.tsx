import Image from "next/image";

export default function ImageCard({
  imageSrc,
  imageAlt = "image",
  className = "relative bg-orange-300 rounded-3xl w-56 h-56 mt-12",
  imageWidth = 500,
  imageHeight = 500,
}: {
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
}) {
  return (
    <div className={`card ${className}`}>
      <div className="masker w-full h-full overflow-hidden rounded-3xl absolute">
        <Image
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          className="w-40 absolute bottom-0 left-0 scale-150 object-contain h-56"
          alt={imageAlt}
        />
      </div>
      <div className="revealer rounded-3xl overflow-hidden h-[calc(100%+3rem)] -top-12 w-full relative">
        <Image
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          className="w-40 absolute bottom-0 left-0 scale-150 object-contain h-56"
          alt={imageAlt}
        />
      </div>
    </div>
  );
}
