import { SessionProvider } from "@solid-mediakit/auth/client";
import { MetaProvider, Title } from "@solidjs/meta";
import { Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { AdminDataProvider } from "./contexts/AdminDataContext";
import Admin from "./routes/admin";

export default function App() {
  return (
    <Router
      root={(props) => (
        <AdminDataProvider>
          <MetaProvider>
            <Title>Sorting Algorithm Visualization</Title>
            <Suspense>
              <SessionProvider>{props.children}</SessionProvider>
            </Suspense>
          </MetaProvider>
        </AdminDataProvider>
      )}
    >
      <FileRoutes />
      <Route path="/Admin" component={Admin} />
    </Router>
  );
}
