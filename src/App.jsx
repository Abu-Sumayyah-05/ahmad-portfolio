import { lazy, Suspense } from "react";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Cursor } from "./components/Cursor";

// Case study pages are split into their own files, so the home page doesn't download them
const AlQanitaatCase = lazy(() => import("./pages/AlQanitaatCase").then((m) => ({ default: m.AlQanitaatCase })));

// A tiny router: the site has only a few pages, so a router library isn't worth its size.
const routes = {
  "/": Home,
  "/work/al-qanitaat": AlQanitaatCase,
};

function App() {
  // Treat "/work/al-qanitaat/" the same as "/work/al-qanitaat"
  const path = window.location.pathname.replace(/(.)\/$/, "$1");
  const Page = routes[path] ?? NotFound;
  return (
    <>
      <Cursor />
      <Suspense fallback={null}>
        <Page />
      </Suspense>
    </>
  );
}

export default App;
