import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import * as serviceWorker from "./serviceWorker";
import { detect } from "detect-browser";
function App() {
  const b = detect();
  return <pre>{JSON.stringify(b, null, 2)}</pre>;
}

function Lander() {
  return (
    <>
      <span id="credits">
        Built by the <a href="https://majel.me">majel.me</a> team.
      </span>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

serviceWorker.register();
