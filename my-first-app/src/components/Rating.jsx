const Rating = (({ children }) => {
    let rate
    {
        if (Math.round(children) == 0) {
            return (
                <div className="Rating">
                    <p>☆☆☆☆☆</p>
                </div>
            )
        }
        else if (Math.round(children) == 1) {
            return (
                <div className="Rating">
                    <p>★☆☆☆☆</p>
                </div>
            )
        }
        else if (Math.round(children) == 2) {
            return (
                <div className="Rating">
                    <p>★★☆☆☆</p>
                </div>
            )
        }
        if (Math.round(children) == 3) {
            return (
                <div className="Rating">
                    <p>★★★☆☆</p>
                </div>
            )
        }
        if (Math.round(children) == 4) {
            return (
                <div className="Rating">
                    <p>★★★★☆</p>
                </div>
            )
        } else {
            return (
                <div className="Rating">
                    <p>★★★★★</p>
                </div>
            )
        }
    }

})
export default Rating