import { lazy, Suspense, useEffect } from "react";
import { HashRouter } from "react-router-dom"

//Lazy imports
import AppContext from "./Context/AppContext";
import Skeleton from "./Components/Skeleton/Skeleton";
const AppRoutes = lazy(() => import("./Routes/AppRoutes"))

function App() {

  useEffect(() => {
    if (localStorage.getItem('LightMode') === null) {
      localStorage.setItem('LightMode', false);
    }
  }, [])

  return (
    <AppContext>
      <HashRouter>
        <Suspense fallback={<Skeleton />}>
          <AppRoutes />
        </Suspense>
      </HashRouter>
    </AppContext>
  )
}

export default App
