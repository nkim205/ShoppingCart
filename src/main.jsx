import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Simplified main.jsx that no longer manages state
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);