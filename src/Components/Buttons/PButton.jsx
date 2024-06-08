import './Styles/PButton.css'

export default function PButton({
    text = 'Button',
    funct, borderRadius = 150,
    padding = [13, 44],
    fontSize = 16,
    className,
}) {

    return (
        <button className={`p-btn ${className}`} onClick={() => funct()} style={{ borderRadius: `${borderRadius}px` }}>
            <label className='d-flex' style={{ borderRadius: `${borderRadius}px`, padding: `${padding[0]}px ${padding[1]}px`, fontSize: `${fontSize}px` }}>{text}</label>
        </button>
    )
}