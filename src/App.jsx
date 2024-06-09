import { lazy, Suspense } from "react";
import { useLoad } from "./hooks/useLoading/useLoad"
import { BrowserRouter, HashRouter } from "react-router-dom"

//Lazy imports
import LoadingBar from "react-top-loading-bar"
import userDarkMode from "./hooks/useDarkMode/useDarkMode";
import Skeleton from "./Components/Skeleton/Skeleton";
const AppRoutes = lazy(() => import("./Routes/AppRoutes"))

function App() {
  const { ToggleDM } = userDarkMode();
  const { progress, setProgress } = useLoad(0);

  return (
    <BrowserRouter basename="/Portfolio/">
      <Suspense fallback={<Skeleton />}>
        <LoadingBar color="#2388EE" progress={progress} onLoaderFinished={() => setProgress(0)} height={5} />
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
