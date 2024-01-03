import { useState } from "react";
import Card from "./ui/Card";

export default function UseState() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputVaue] = useState("");

  let counterWoState = 0;

  const increment = () => {
    setCounter(counter + 1);
  };

  const incrementWoState = () => {
    counterWoState += 1;
    console.log(counterWoState);
  };

  const replicateValue = (event) => {
    setInputVaue(event.target.value);
  };

  return (
    <Card
      title="useState"
      description='Este Hook é utilizado para armazenar o estado de um "valor".
    Quando uma mudança acontece nesse "valor" o componente é
    rederizado novamente para apresentar as mudanças, mantendo o estado
    anterior de todos os outros "valores" presentes no componente.'
    >
      <div className="flex items-center space-x-4">
        <input
          className="outline-none ring-0 bg-[#add8e6] rounded-md h-10 p-2 w-40 placeholder:text-pallet-4"
          placeholder="type something..."
          maxLength={10}
          onChange={replicateValue}
        />
        <span>{inputValue}</span>
      </div>
      <div className="flex space-x-4 items-center">
        <button
          className="py-2 px-4 rounded-md h-10 w-40 bg-pallet-1 text-pallet-5 outline-none ring-0 font-bold text-xs"
          onClick={increment}
        >
          Increment w/ state
        </button>
        <span>Counter: {counter}</span>
      </div>

      <div className="flex space-x-4 items-center">
        <button
          className="py-2 px-4 rounded-md w-40 bg-pallet-1 text-pallet-5 outline-none ring-0 font-bold text-xs"
          onClick={incrementWoState}
        >
          Increment w/o state (view console)
        </button>
        <span>Counter: {counterWoState}</span>
      </div>
    </Card>
  );
}
