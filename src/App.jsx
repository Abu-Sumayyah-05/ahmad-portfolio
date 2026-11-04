import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Cursor } from "./components/Cursor";

// The site is a single page, so a router library isn't worth its download size:
// "/" shows the portfolio and any other path shows the 404 page.
function App() {
  const isHome = window.location.pathname === "/";
  return (
    <>
      <Cursor />
      {isHome ? <Home /> : <NotFound />}
    </>
  );
}

export default App;
