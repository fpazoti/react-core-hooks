import { useRef } from "react";
import Card from "../components/ui/Card";

export default function UseRef() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <Card
      title="useRef"
      description="Esse hook permite acessar a referencia de um elemento html sem a
    necessidade de re-renderizar o componente."
    >
      <input
        className="outline-none ring-0 bg-[#add8e6] rounded-md h-10 p-2 w-52 placeholder:text-pallet-4"
        placeholder="Click button to focus..."
        maxLength={10}
        ref={inputRef}
      />
      <button
        className="py-2 px-4 rounded-md h-10 w-52 bg-pallet-1 text-pallet-5 outline-none ring-0 font-bold"
        onClick={handleClick}
      >
        Click To Focus
      </button>
    </Card>
  );
}
