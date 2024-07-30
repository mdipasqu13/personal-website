import React from "react";
import App from "./src/components/App";
import "./src/index.css";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
