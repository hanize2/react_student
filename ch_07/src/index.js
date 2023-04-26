import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Context의 값을 참조할 컴포넌트를 Provider로 감싸준다. 대부분 루트 컴포너트이다. */}
    <AdminFlagProvider>
      <App />
    </AdminFlagProvider>
  </React.StrictMode>
);
