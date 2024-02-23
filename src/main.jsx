import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import AuthContext from "./Components/Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-6xl mx-auto">
    <React.StrictMode>
      <AuthContext>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext>
    </React.StrictMode>
  </div>
);
