import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // подключение css файла
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

// render - отобразить

root.render(
    <BrowserRouter>
    {/* оборачиваем мы для чтобы наше приложение работал с react-router-dom */}
        <App />
    </BrowserRouter>
);
