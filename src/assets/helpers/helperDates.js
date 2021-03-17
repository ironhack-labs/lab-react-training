export const bDay = (date) => {
    let day = date.getDate()
    let months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ag', 'Sept', 'Oct', 'Nov', 'Dec' ]
    let month = months[ date.getMonth() ]
    let year = date.getFullYear()

    return `${day} of ${month}, ${year}`
}

