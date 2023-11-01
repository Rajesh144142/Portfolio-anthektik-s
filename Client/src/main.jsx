import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM from "react-dom"
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} /> {/* Render App as a route */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
