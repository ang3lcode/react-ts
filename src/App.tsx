import { useState } from "react";
import { RandomFox } from "./components/RandomFox";

const random = (): number => Math.floor(Math.random()*123)+1;
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

type ImageItem = {id: string, url:string}

function App(): JSX.Element {
  const [images, setImages] = useState<Array<ImageItem>>([ // <string[]> or <Array<string>>
   {id:generateId(), url:`https://randomfox.ca/images/${random()}.jpg`},

  ]);

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-pink-600">Hello world!</h1>
      
      {images.map(({id, url}) => (
        <div className="p-4" key={id}>
          <RandomFox image={url}  />
        </div>

      ))}
    </>
  );
}

export default App;
