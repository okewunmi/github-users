import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

//dev-6cc3rl0lm72k1tj4.us.auth0.com
//OHwRpnHyIUq6MEYHcovneNztbjaypcES

//dev-ifivcyr2mexjqowy.us.auth0.com
//LMAFQc6oGCYZVwPxb3we8ui2R8Aq21h9
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ifivcyr2mexjqowy.us.auth0.com"
      clientId="LMAFQc6oGCYZVwPxb3we8ui2R8Aq21h9"
      authorizationParams={{
        redirect_uri: window.location.origin,
        cacheLocation: "localstorage",
      }}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
