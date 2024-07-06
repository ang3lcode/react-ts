import { useEffect, useRef, useState } from "react";
import type { ImgHTMLAttributes } from "react";


type lazyImageProps = { src: string; onLazyLoad?: (img: HTMLImageElement) => void;};
type ImageNative = ImgHTMLAttributes<HTMLImageElement>
type Props = lazyImageProps & ImageNative

export const RandomFox = ({ src, onLazyLoad, ...imgPrpos }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  useEffect(() => {
    // nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        //onintersection -> consol
        if (!entry.isIntersecting || !node.current) {
            return;
          }
  
          setCurrentSrc(src);
  
          if (typeof onLazyLoad === "function") {
            onLazyLoad(node.current);
          }
        });
      });
    // observador node
    if (node.current) {
      observer.observe(node.current);
    }
    //desconectar
    return () => {
      observer.disconnect();
    };
  }, [src, onLazyLoad]);

  return (
    <img
      ref={node}
      src={currentSrc}
      className="w-1/2  rounded-md bg-gray-300"
      {...imgPrpos}
    //   onClick={onClick}
    />
  );
};
