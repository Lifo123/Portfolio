import { lazy, Suspense, useEffect } from "react";
import { useLoad } from "./hooks/useLoading/useLoad"
import { BrowserRouter, HashRouter } from "react-router-dom"

//Lazy imports
import AppContext from "./Context/AppContext";
import LoadingBar from "react-top-loading-bar"
import Skeleton from "./Components/Skeleton/Skeleton";
const AppRoutes = lazy(() => import("./Routes/AppRoutes"))

function App() {
  const { progress, setProgress } = useLoad(0);

  useEffect(() => {
    if (localStorage.getItem('LightMode') === null) {
      localStorage.setItem('LightMode', false);
    }
  }, [])

  return (
    <AppContext>
      <BrowserRouter basename="/Portfolio/">
        <Suspense fallback={<Skeleton />}>
          <LoadingBar color="#2388EE" progress={progress} onLoaderFinished={() => setProgress(0)} height={5} />
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </AppContext>
  )
}

export default App
