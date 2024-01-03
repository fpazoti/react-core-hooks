import { useRef } from "react";
import ToogleButton from "./ui/ToogleButton";
import Card from "../components/ui/Card";

export default function UseImperativeHandle() {
  const childButtonRef = useRef(null);

  const handleClick = () => {
    childButtonRef.current.toggleText();
  };

  return (
    <Card
      title="useImperativeHandle"
      description="Esse hook permite que um componente pai invoque métodos dos seus
    componentes filhos. Para usar esse hook, é necessário passar a
    referência do componente filho para frente usando forwardRef."
    >
      <ToogleButton ref={childButtonRef} />
      <button
        className="py-2 px-4 rounded-md h-10 w-52 bg-pallet-1 text-pallet-5 outline-none ring-0 font-bold"
        onClick={handleClick}
      >
        Button from parent
      </button>
    </Card>
  );
}
