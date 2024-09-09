import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <h1><a className="underline text-3xl font-bold text-zinc-600 hover:text-white cursor-pointer transition ease-in-out duration-200" target="_blank" href="https://links.xian.my.id">My Easter Egg Project</a></h1>
      </main>
      <footer>
        <p className="flex flex-row justify-baseline items-center">
          Made with <img src={reactLogo} alt="React Logo" className="logo h-2 w-2" /> and <img src={viteLogo} alt="Vite Logo" className="logo h-2 w-2" />.
        </p>
      </footer>
    </>
  );
}

export default App;
