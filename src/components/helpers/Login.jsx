import { useContext } from "react";
import { AppContext } from "../UseContext";

export default function Login() {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        className="outline-none ring-0 bg-[#add8e6] rounded-md h-10 p-2 w-40 placeholder:text-pallet-4"
        placeholder="Enter username..."
        maxLength={10}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}
