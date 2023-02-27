const rating = ({ children }) => {

    if (children < 1.9) {
        children = "★✰✰✰✰"
    } else if (children < 2.9) {
        children = "★★✰✰✰"
    } else if (children < 3.9) {
        children = "★★★✰✰"
    } else if (children < 4.9) {
        children = "★★★★✰"
    } else {
        children = "★★★★★"
    }

    return <p>{children}</p>
}

export default rating