import { useState, useLayoutEffect, useEffect } from "react";
import Card from "../components/ui/Card";

export default function UseLayoutEffect() {
  const arr = ["useEffect", "useLayoutEffect"];
  const [result, setResult] = useState([]);

  useEffect(() => {
    //UMA maneira de adicionar um item a um estado que controla um array
    setResult((prevState) => {
      if (prevState.indexOf("useEffect") === -1) {
        return [...prevState, arr.find((el) => el === "useEffect")];
      }

      return prevState;
    });
  }, []);

  useLayoutEffect(() => {
    //OUTRA maneira de adicionar um item a um estado que controla um array
    setResult((prevState) => {
      if (prevState.indexOf("useLayoutEffect") === -1) {
        return prevState.concat(arr.find((el) => el === "useLayoutEffect"));
      }

      return prevState;
    });
  }, []);

  return (
    <Card
      title="useLayoutEffect"
      description="Identico ao useEffect, porém é executado antes do mesmo."
    >
      {result.map((el) => (
        <p key={el}>Linha de chegada 🏁: {el}</p>
      ))}
    </Card>
  );
}
