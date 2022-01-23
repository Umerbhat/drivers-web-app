import { css } from "@emotion/css";
import React from "react";
import { AppRoutes } from "./Routes";

function App() {
  return (
    <div
      className={css`
        max-width: 700px;
        margin: auto;
        padding: 0 1rem;
      `}
      data-testid="app"
    >
      <AppRoutes />
    </div>
  );
}

export default App;
