import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SuspenseWrapper from "../Components/SuspenseWrapper/SuspenseWrapper";


const Index = lazy(() => import('../Pages/Index/Index'))
const ErrorRoute = lazy(() => import('../Pages/ErrorRoute/ErrorRoute'))


export default function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<SuspenseWrapper element={<Index />} />} />
            <Route path='*' element={<SuspenseWrapper element={<ErrorRoute />} />} />
        </Routes>
    )
}