import UseCallback from "./components/UseCallback";
import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import UseImperativeHandle from "./components/UseImperativeHandle";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";
import UseState from "./components/UseState";

export default function App() {
  return (
    <div className="grid-container text-white h-dvh font-poppins px-8 py-4">
      <UseState />
      <UseReducer />
      <UseEffect />
      <UseRef />
      <UseLayoutEffect />
      <UseImperativeHandle />
      <UseContext />
      <UseMemo />
      <UseCallback />
    </div>
  );
}
