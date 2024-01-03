import { useEffect, useState, useMemo } from "react";
import { people } from "../sampleData";
import Card from "../components/ui/Card";
import PS from "../components/ui/PS";

export default function UseMemo() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(people);
  }, []);

  const findLongestName = (names) => {
    if (!names) return null;

    let longestName = "";
    for (let person of data) {
      if (person.name.length > longestName) longestName = person.name;
    }
    console.log("I was created");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <Card
      title="useMemo"
      description="Esse hook permite memorizar algum resultado calculado/retornado para que
    a cada rederizacao do componente o item memorizado nao necessite ser
    calculado novamente. Possui um array de dependencia para indicarmos
    quando queremos que o item seja recalculado."
    >
      <PS
        text="Retire do código os comentários e deixe de usar o useMemo para ver a
        diferença. Use o console"
      />

      <div className="grid grid-cols-2 grid-rows-2 gap-2 space-x-4">
        <div className="col-span-1 row-span-1">
          <button
            className="py-2 px-4 rounded-md h-10 w-40 bg-pallet-1 text-pallet-5 outline-none ring-0 font-bold"
            onClick={() => setToggle(!toggle)}
          >
            Toggle
          </button>
        </div>
        <div className="col-span-1 row-span-2 flex items-center">
          {toggle && <span>Toggle</span>}
        </div>
        <div className="col-span-1 row-span-1">
          {/* <p>Longest name is: {findLongestName(data)}</p> */}
          <p className="text-center">Longest name is: {getLongestName}</p>
        </div>
      </div>
    </Card>
  );
}
