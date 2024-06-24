import './MessageDev.css'

export default function MessageDev({ state = 0 }) {
    if (state === 1) {
        return (
            <div className="msg-dev d-flex f-center">
                Website Under Development
            </div>
        )
    }
}