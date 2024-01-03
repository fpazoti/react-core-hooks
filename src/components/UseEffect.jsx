import { useState, useEffect } from "react";
import Card from "../components/ui/Card";
import PS from "../components/ui/PS";

export default function UseEffect() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Sem array de dependencia");
  });

  useEffect(() => {
    console.log("Com array de dependencia vazio");
  }, []);

  useEffect(() => {
    console.log("Com array de dependendia e observando o estado de counter");
  }, [counter]);

  return (
    <Card
      title="useEffect"
      description="Este Hook é executado toda vez que o que estiver em seu array de
    dependencias mudar. Caso o array não exista, o useEffect é executado
    toda vez que o componente renderizar novamente e caso esteja vazio, é
    executado apenas uma vez na criaçao do componente."
    >
      <PS text="Olhe o console para analisar a diferença entre ter ou não as dependências." />

      <div className="flex items-center space-x-4">Counter: {counter}</div>
      <button
        className="py-2 px-4 rounded-md h-10 w-40 bg-pallet-1 text-pallet-5 outline-none ring-0 font-bold"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click Here
      </button>
    </Card>
  );
}
