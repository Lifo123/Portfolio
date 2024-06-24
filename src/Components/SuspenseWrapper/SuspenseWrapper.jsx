import './SuspenseWrapper.css'
import { Suspense } from "react"

import LoadingPage from '../Loading/Loading'

export default function SuspenseWrapper({ element }) {
    return (
        <Suspense fallback={<LoadingPage />}>
            {element}
        </Suspense>
    )
}

