const Rating = ({ children }) => {

    let result = Math.round(children)

    const stars = (result) => {
        switch (result) {
            case 0:
                return '☆☆☆☆☆'
                break
            case 1:
                return '★☆☆☆☆'
                break
            case 2:
                return '★★☆☆☆'
                break
            case 3:
                return '★★★☆☆'
                break
            case 4:
                return '★★★★☆'
                break
            case 5:
                return '★★★★★'
                break
        }
    }

    let finalStars = stars(children)
    const divStyle = {
        fontSize: '5em',
        margin: 'auto',
    }
    return (
        <div >
            <h1>{stars(result)}</h1>
        </div>

    )

}

export default Rating