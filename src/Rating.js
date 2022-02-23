function Rating(props) {

    const { children } = props

    let score = ''

    if (Math.round(children) === 0) {
        score = '🌕🌕🌕🌕🌕'
    }
    else if (Math.round(children) === 1) {
        score = '🌕🌕🌕🌕🌑'
    }
    else if (Math.round(children) === 2) {
        score = '🌕🌕🌕🌑🌑'
    }
    else if (Math.round(children) === 3) {
        score = '🌕🌕🌑🌑🌑'
    }
    else if (Math.round(children) === 4) {
        score = '🌕🌑🌑🌑🌑'
    }
    else if (Math.round(children) === 5) {
        score = '🌑🌑🌑🌑🌑'
    }


    return (
        <p>
            {score}
        </p>

    )
}

export default Rating