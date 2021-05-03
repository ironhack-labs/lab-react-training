


export default function (props) {
    const stars = (num) => {
        const round = Math.round(num)
        const emptyStars = ['☆', '☆', '☆', '☆', '☆']
        for (let i = 0; i < round; i++) {
            emptyStars[i] = '★'
        }
        return emptyStars.join('')
    }
    const rate = stars(props.children)

    return (
        <div>
            <h2>{rate}</h2>
        </div>
    )
}
