import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Coin from "./Coin";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        {/* <App /> */}
        <Coin />
    </React.StrictMode>
);
