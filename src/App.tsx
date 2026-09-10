import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/header/hero";
import Nav from "./components/header/nav";
import Players from "./components/players/players";
import type { Iplayers } from "./types";
import { ToastContainer } from "react-toastify";

const feachedPromise = async (): Promise<Iplayers[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
      const [coins, setCoins] = useState(1000)
      const [feachedPromiseState] = useState(() =>feachedPromise() )
  return (
    <>
      <Nav coins= {coins}></Nav>
      <Hero></Hero>
      <Suspense fallback={<p>Loading ....</p>}>
        <Players feachedData = {feachedPromiseState}  coins={coins} setCoins= {setCoins}></Players>
      </Suspense>
       <ToastContainer />
      <h2 className="text-red-500">Bpl Dream</h2>
    </>
  );
}

export default App;
