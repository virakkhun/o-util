import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary, Suspense } from "solid-js";
import { MainLayout } from "./layouts/main";
import { DocLayout } from "./layouts/doc";
import { Meta, MetaProvider, Title } from "@solidjs/meta";
import { ErrorFallback } from "./routes/error";
import "./app.css";
import "~/assets/css/one-dark.css";

export default function App() {
  return (
    <MetaProvider>
      <Title>o-utils</Title>
      <Meta
        name="description"
        content="o-util is minimal library for working with Object in javascript."
      />
      <Meta property="og:title" content="o-utils lib" />
      <Meta
        property="og:description"
        content="o-util is minimal library for working with Object in javascript."
      />
      <Router
        root={(props) => (
          <ErrorBoundary fallback={(err) => <ErrorFallback {...err} />}>
            <main class="text-gray-50 bg-gray-900 h-svh">
              {props.location.pathname === "/" ? (
                <MainLayout>
                  <Suspense>{props.children}</Suspense>
                </MainLayout>
              ) : props.location.pathname.includes("/doc") ? (
                <DocLayout>
                  <Suspense>{props.children}</Suspense>
                </DocLayout>
              ) : (
                <Suspense>{props.children}</Suspense>
              )}
            </main>
          </ErrorBoundary>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
