const Rating = ({ children }) => {

    const roundChildren = Math.round(children)

    const renderSwitch = (roundChildren) => {
        switch (roundChildren) {
            case 0:
                return '☆☆☆☆☆'
            case 1:
                return '★☆☆☆☆'
            case 2:
                return '★★☆☆☆'
            case 3:
                return '★★★☆☆'
            case 4:
                return '★★★★☆'
            case 5:
                return '★★★★★'
        }
    }

    return (
        <h1>{renderSwitch(roundChildren)}</h1>
    )
}
export default Rating