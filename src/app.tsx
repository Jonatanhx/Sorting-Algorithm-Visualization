import { SessionProvider } from "@solid-mediakit/auth/client";
import { MetaProvider, Title } from "@solidjs/meta";
import { Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { CountryDataProvider } from "./contexts/CountryDataContext";
import { SelectedDataTableProvider } from "./contexts/SelectedDataTableContext";
import Admin from "./routes/admin";

export default function App() {
  return (
    <Router
      root={(props) => (
        <SelectedDataTableProvider>
          <CountryDataProvider>
            <MetaProvider>
              <Title>Sorting Algorithm Visualization</Title>
              <Suspense>
                <SessionProvider>{props.children}</SessionProvider>
              </Suspense>
            </MetaProvider>
          </CountryDataProvider>
        </SelectedDataTableProvider>
      )}
    >
      <FileRoutes />
      <Route path="/Admin" component={Admin} />
    </Router>
  );
}
