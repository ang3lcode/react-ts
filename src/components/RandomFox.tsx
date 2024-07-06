import { useEffect, useRef, useState } from "react";

type Props = { image: string };

export const RandomFox = ({ image }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  useEffect(() => {
    // nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        //onintersection -> consol
        if (entry.isIntersecting) {
          //   console.log("hey you");
          setSrc(image);
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
  }, [image]);

  return <img ref={node} src={src} className="w-1/2  rounded-md bg-gray-300" />;
};
