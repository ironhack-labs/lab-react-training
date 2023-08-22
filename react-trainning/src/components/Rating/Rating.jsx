const Rating = ({ children }) => {

    let childrenCount = ''

    switch (true) {

        case children >= 0 && children < 1:
            childrenCount = '☆☆☆☆☆'
            break

        case children >= 1 && children < 1.9:
            childrenCount = '★☆☆☆☆'
            break

        case children >= 1.9 && children < 2.9:
            childrenCount = '★★☆☆☆'
            break

        case children >= 2.9 && children < 3.9:
            childrenCount = '★★★☆☆'
            break

        case children >= 3.9 && children < 4.9:
            childrenCount = '★★★★☆'
            break

        case children >= 4.9:
            childrenCount = '★★★★★'
            break

        default:
            childrenCount = ''
    }

    return (
        <div style={{ fontSize: '3em' }}>
            {childrenCount}
        </div>
    )
}

export default Rating
