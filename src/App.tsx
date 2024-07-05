import { RandomFox } from "./components/RandomFox";

const random = (): number => Math.floor(Math.random()*123)+1

function App(): JSX.Element {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-pink-600">Hello world!</h1>
      <RandomFox image={`https://randomfox.ca/images/${random()}.jpg`}  />
    </>
  );
}

export default App;
