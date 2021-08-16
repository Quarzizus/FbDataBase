import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import fbconfig from "./fbconfig.js";
import { FirebaseAppProvider } from "reactfire";

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={fbconfig}>
    <Suspense fallback="Cargando">
      <App />
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById("App")
);
