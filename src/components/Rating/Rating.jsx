import './Rating.css'

const Rating = ({ children, word }) => {
    console.log('hola', children)

    // switch (children) {
    //     case children > 1:
    //         word = '☆☆☆☆☆'
    //         break
    //     case children > 2:
    //         word = '★☆☆☆☆'
    //         break
    //     case children > 3:
    //         word = '★★☆☆☆'
    //         break
    //     case children > 4:
    //         word = '★★★☆☆'
    //         break
    //     case children > 5:
    //         word = '★★★★☆'
    //         break

    // }

    return (
        <article className="IdCard">

            <p> {word}{children} </p>

            {children > 4.5 ? '★★★★★' : undefined}
            {children >= 3.5 && children < 4.5 ? '★★★★☆' : undefined}
            {children >= 2.5 && children < 3.5 ? '★★★☆☆' : undefined}
            {children >= 1.5 && children < 2.5 ? '★★☆☆☆' : undefined}
            {children >= 0.5 && children < 1.5 ? '★☆☆☆☆' : undefined}
            {children < 0.5 ? '☆☆☆☆☆' : undefined}


        </article>
    )
}


export default Rating