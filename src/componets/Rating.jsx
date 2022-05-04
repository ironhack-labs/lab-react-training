const Rating = ({ children }) => {
    let empty
    if (children < 1) {
        empty = <div>
            <p>☆</p>
        </div >
    } else if (children >= 1 && children < 2) {
        empty = <div>
            <p>★☆☆☆☆</p>
        </div >

    } else if (children >= 2 && children < 3) {
        empty = <div>
            <p>★★☆☆☆</p>
        </div >

    } else if (children >= 3 && children < 4) {
        empty = <div>
            <p>★★★☆☆</p>
        </div >
    } else if (children >= 4 && children < 5) {
        empty = <div>
            <p>★★★★☆</p>
        </div >
    } else empty = <div>
        <p>★★★★★</p>
    </div >
    return empty

}
export default Rating


    //     < div >
    //     <p>☆</p>
    //     <p>★☆☆☆☆</p>
    //     <p>★★☆☆☆</p>
    //     <p>★★★☆☆</p>
    //     <p>★★★★☆</p>
    //     <p>★★★★★</p>
    // </div >

