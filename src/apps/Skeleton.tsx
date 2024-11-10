interface Props {
    className?: string;
}


export default function Skeleton({ className }: Props) {
    return (
        <span className={`d-flex skeleton ${className}`}></span>
    )
}