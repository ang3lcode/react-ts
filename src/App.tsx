import { useState } from "react";
import type { MouseEventHandler } from "react";
import { RandomFox } from "./components/RandomFox";

const random = (): number => Math.floor(Math.random() * 123) + 1;
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

type ImageItem = { id: string; url: string };

function App(): JSX.Element {
  // <string[]> or <Array<string>>
  const [images, setImages] = useState<Array<ImageItem>>([
   
  ]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {

    const newImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };
    setImages([
      ...images, newImageItem
    ])
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-pink-600">Hello world!</h1>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map(({ id, url }) => (
        <div className="p-4" key={id}>
          <RandomFox image={url} /> 
        </div>
      ))}
    </>
  );
}

export default App;
