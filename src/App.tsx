import { useState } from "react";
import { RandomFox } from "./components/RandomFox";

const random = (): number => Math.floor(Math.random()*123)+1

function App(): JSX.Element {
  const [images, setImages] = useState([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);
  
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-pink-600">Hello world!</h1>
      
      {images.map((image, index) => (
        <div className="p-4" key={index}>
          <RandomFox image={image}  />
        </div>

      ))}
    </>
  );
}

export default App;
