import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SuspenseWrapper from "../Components/SuspenseWrapper/SuspenseWrapper";
import Skeleton from "../Components/Skeleton/Skeleton";
import MessageDev from "../Components/MessageDev/MessageDev";

const Index = lazy(() => import('../Pages/Index/Index'))
const ErrorRoute = lazy(() => import('../Pages/ErrorRoute/ErrorRoute'))
const AllProjects = lazy(() => import("../Pages/AllProjects/AllProjects"))


export default function AppRoutes() {

    return (
        <>
            <MessageDev state={1}/>
            <Routes>
                <Route path='/' element={<SuspenseWrapper element={<Index />} />} />
                <Route path='*' element={<SuspenseWrapper element={<ErrorRoute />} />} />

                <Route path="/Skeleton" element={<SuspenseWrapper element={<Skeleton />} />} />
                <Route path="/Projects" element={<SuspenseWrapper element={<AllProjects />} />} />
            </Routes>
        </>
    )
}