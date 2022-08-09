import "./styles.css";
import * as React from "react";
import { sampleActions as actions } from "./slice/index";
import { useDispatch, useSelector } from "react-redux";
import { selectName } from "./slice/selectors";

export default function App() {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const state = useSelector((state) => state);
  const getName = () => {
    console.log("calledGetName");
    const rank = Math.floor(Math.random() * 7);
    dispatch(actions.getNameDisplay(rank + ".Rachana"));

    dispatch(actions.getChangeLoaded(20 + rank));
  };

  console.log("state", state);
  return (
    <div id="root" className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={getName}>click</button>
      <h1>{name.name}</h1>
    </div>
  );
}
