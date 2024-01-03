import { useEffect } from "react";

export default function ChildOfUseCallback({ fn, ...rest }) {
  useEffect(() => {
    console.log("ChildOfUseCallback Render");
  }, [fn]);

  return <div {...rest}>{fn()}</div>;
}
