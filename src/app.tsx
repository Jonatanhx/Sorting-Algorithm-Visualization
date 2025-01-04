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
import { SortingSpeedProvider } from "./contexts/SortingSpeedContext";
import Home from "./routes";
import Admin from "./routes/admin";
import NotFound from "./routes/NotFound";

export default function App() {
  return (
    <Router
      base={import.meta.env.SERVER_BASE_URL}
      root={(props) => (
        <SelectedDataTableProvider>
          <IsSortingProvider>
            <IsSortedProvider>
              <CountryDataProvider>
                <AdminDataProvider>
                  <SortingSpeedProvider>
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
                  </SortingSpeedProvider>
                </AdminDataProvider>
              </CountryDataProvider>
            </IsSortedProvider>
          </IsSortingProvider>
        </SelectedDataTableProvider>
      )}
    >
      <FileRoutes />
      <Route path="/Admin" component={Admin} />
      <Route path="/" component={Home} />
      <Route path="*404" component={NotFound} />
    </Router>
  );
}
