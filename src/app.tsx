import { SessionProvider } from "@solid-mediakit/auth/client";
import { MetaProvider, Title } from "@solidjs/meta";
import { Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import logo from "../src/public/assets/favicon.png";
import "./app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { DataProvider } from "./contexts/DataContext";
import Home from "./routes";
import NotFound from "./routes/NotFound";

export default function App() {
  return (
    <Router
      base={import.meta.env.SERVER_BASE_URL}
      root={(props) => (
        <DataProvider>
          <MetaProvider>
            <Title>Sorting Visualizer</Title>
            <Suspense>
              <link rel="icon" href={logo} />
              <SessionProvider>
                <Header />
                {props.children}
                <Footer />
              </SessionProvider>
            </Suspense>
          </MetaProvider>
        </DataProvider>
      )}
    >
      <FileRoutes />
      <Route path="/" component={Home} />
      <Route path="*404" component={NotFound} />
    </Router>
  );
}
