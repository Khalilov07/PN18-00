import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // подключение css файла
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";

// render - отобразить

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* 
        PesistGate - принимает два значения: loading - на случай если у нас большая логика мы будем показывать загрузку,
        вторая эта наш persistor
      */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

