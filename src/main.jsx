import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { NewsProvider } from "./providers/NewsContext";
import { UserProvider } from "./providers/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <UserProvider>
            <NewsProvider>            
            <App />
            </NewsProvider>
         </UserProvider>
      </BrowserRouter>
   </React.StrictMode>
);
