import './Random.css'

export default function Random ({min, max}) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div className="random">
            <p>Random value {min} and {max} ={'>'} {randomNumber}</p>
        </div>
    )
}