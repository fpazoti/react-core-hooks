import { createContext, useState } from "react";
import Login from "../components/helpers/Login";
import User from "../components/helpers/User";
import Card from "../components/ui/Card";

export const AppContext = createContext({});

export default function UseContext() {
  const [username, setUsername] = useState("");

  return (
    <Card
      title="useContext"
      description=" Esse hook permite disponibilizar via context api do react quaisquer
    informações por toda aplicação. Funções, estados, ou qualquer outro dado
    que tenha sido compartilhado através do contexto."
    >
      <AppContext.Provider value={{ username, setUsername }}>
        <Login /> <User />
      </AppContext.Provider>
    </Card>
  );
}
