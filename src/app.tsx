import { SessionProvider } from "@solid-mediakit/auth/client";
import { MetaProvider, Title } from "@solidjs/meta";
import { Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AdminDataProvider } from "./contexts/AdminDataContext";
import { CountryDataProvider } from "./contexts/CountryDataContext";
import { IsSortedProvider } from "./contexts/IsSortedContext";
import { IsSortingProvider } from "./contexts/IsSortingContext";
import { SelectedDataTableProvider } from "./contexts/SelectedDataTableContext";
import Admin from "./routes/admin";

export default function App() {
  return (
    <Router
      root={(props) => (
        <SelectedDataTableProvider>
          <IsSortingProvider>
            <IsSortedProvider>
              <CountryDataProvider>
                <AdminDataProvider>
                  <MetaProvider>
                    <Title>Sorting Visualizer</Title>
                    <Suspense>
                      <SessionProvider>
                        <Header />
                        {props.children}
                        <Footer />
                      </SessionProvider>
                    </Suspense>
                  </MetaProvider>
                </AdminDataProvider>
              </CountryDataProvider>
            </IsSortedProvider>
          </IsSortingProvider>
        </SelectedDataTableProvider>
      )}
    >
      <FileRoutes />
      <Route path="/Admin" component={Admin} />
    </Router>
  );
}
