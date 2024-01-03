import { useImperativeHandle } from "react";
import { useState, forwardRef } from "react";

const ToogleButton = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleText() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button
        className="py-2 px-4 rounded-md h-10 w-52 bg-pallet-1 text-pallet-5 outline-none ring-0 font-bold"
        onClick={() => setToggle(!toggle)}
      >
        Button from child
      </button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

ToogleButton.displayName = "ToogleButton";
export default ToogleButton;
