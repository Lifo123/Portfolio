import { Suspense } from "react"

export default function SuspenseWrapper({ element }) {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            {element}
        </Suspense>
    )
}