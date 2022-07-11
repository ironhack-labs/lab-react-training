const Rating = ({ children }) => {

    let number = Math.round(children)

    switch (number) {
        case 0:
            number = '✰✰✰✰✰'
            break
        case 1:
            number = '★✰✰✰✰'
            break
        case 2:
            number = '★★✰✰✰'
            break
        case 3:
            number = '★★★✰✰'
            break
        case 4:
            number = '★★★★✰'
            break
        case 5:
            number = '★★★★★'
            break
    }

    return (
        <article>
            {number}
        </article>
    )
}

export default Rating