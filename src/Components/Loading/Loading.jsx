import './Loading.css'

export default function LoadingPage({ type = null }) {

    const LoadData = {
        strokeWidth: type === 1 ? 8 : 6,
    }

    return (
        <span className='load-circle d-flex f-center m-auto fixed' style={{ scale: type === 1 ? 0.45 : 0.8 }}>
            <svg className='d-flex relative' style={LoadData}>
                <circle className='absolute' cx="70" cy="70" r="70"></circle>
            </svg>
        </span>
    )
}