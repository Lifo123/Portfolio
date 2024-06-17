import './Styles/PButton.css'

export default function PButtonSecondary({
    text = 'Button',
    funct = null,
    borderRadius = 150,
    padding = [13, 44],
    fontSize = 16,
    className
}) {

    return (
        <button className={`p-btn-secondary ${className} pointer`} onClick={funct !== null ? () => funct() : null} style={{ borderRadius: `${borderRadius}px` }}>
            <p className='d-flex' style={{ borderRadius: `${borderRadius}px`, padding: `${padding[0]}px ${padding[1]}px`, fontSize: `${fontSize}px` }}>{text}</p>
        </button>
    )
}