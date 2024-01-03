import { useEffect } from "react";
import { useReducer } from "react";
import { useRef } from "react";
import { useState } from "react";
import Card from "./ui/Card";

export default function UseReducer() {
  const [counter, setCounter] = useState(0);
  const [showText, setShowText] = useState(true);
  const renderCount = useRef(0);

  const reducerFn = (states, action) => {
    switch (action.type) {
      case "INCREMENT_AND_TOGGLE_TEXT":
        return { counter: states.counter + 1, showText: !states.showText };
      case "TOOGLE_SHOW_TEXT":
        return { counter: states.counter, showText: !states.showText };
      default:
        return states;
    }
  };

  const [states, dispatch] = useReducer(reducerFn, {
    counter: 0,
    showText: true,
  });

  useEffect(() => {
    renderCount.current += 1;
  });

  const changeUsingState = () => {
    setCounter(counter + 1);
    setShowText(!showText);
  };

  const changeUsingReducer = () => {
    dispatch({ type: "INCREMENT_AND_TOGGLE_TEXT" });
    //dispatch({ type: "TOOGLE_SHOW_TEXT" });
  };

  return (
    <Card
      title="useReducer"
      description="Este Hook é utilizado para gerenciar estados complexos de maneira mais
    organizada. Ele permite criar uma funcao que recebe como o primeiro
    paramtro o estdo complexo e o segundo parametro uma acao que baseada
    nesta, voce pode tomar diferentes decicoes com uma clausula condicional."
    >
      <div className="flex items-center space-x-4">{states.counter}</div>
      <div className="flex space-x-4 items-center">
        <button
          className="py-2 px-4 rounded-md h-10 w-40 bg-pallet-1 text-pallet-5 outline-none ring-0 font-bold"
          onClick={changeUsingReducer}
        >
          Click Here
        </button>
      </div>
      <p>Render count: {renderCount.current}</p>
      {states.showText && <p>I&apos;m showing!</p>}
    </Card>
  );
}
