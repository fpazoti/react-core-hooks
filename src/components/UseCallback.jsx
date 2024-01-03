import { useState, useCallback } from "react";
import ChildOfUseCallback from "../components/helpers/ChildOfUseCallback";
import Card from "../components/ui/Card";
import PS from "../components/ui/PS";

export default function UseCallback() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(
    "Hello There! I belong to the father component but im being invoked by the child component."
  );

  const anyFunction = useCallback(() => {
    console.log("anyFunction WAS CALLED");
    return data;
  }, []);

  // const anyFunction = () => {
  //   console.log("anyFunction WAS CALLED");
  //   return data;
  // };

  return (
    <Card
      title="useCallback"
      description="  Esse hook permite memorizar uma funcao. É usado quando temos uma função
    no componente pai que é passada como propriedade para os componentes
    filhos. Ao utilizar esse hook, garantimos que a função não seja recriada
    a cada renderização do componente pai. Isso é útil para evitar
    renderizações desnecessárias nos componentes filhos, especialmente
    quando eles comparam se a referencia do objeto mudou indicando que
    necessitam renderizar novamente."
    >
      <PS text="Alterne entre as funções no código para ver a diferença com e sem o useCallback. Use o console" />
      <ChildOfUseCallback className="text-xs font-bold" fn={anyFunction} />
      <div className="flex space-x-4 items-center">
        <button
          className="py-2 px-4 rounded-md h-10 w-40 bg-pallet-1 text-pallet-5 outline-none ring-0 font-bold"
          onClick={() => setToggle(!toggle)}
        >
          Toggle
        </button>
        {toggle && <span>Toggle</span>}
      </div>
    </Card>
  );
}
