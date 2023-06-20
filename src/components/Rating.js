function Rating(props){


    const cleanProps = Math.floor(props.children)

    return(
        <div>
            <p>
                {cleanProps === 0
                ? '☆☆☆☆☆'
                : cleanProps === 1
                ? '★☆☆☆☆'
                :cleanProps === 2
                ? '★★☆☆☆'
                : cleanProps === 3
                ? '★★★☆☆'
                : cleanProps === 4
                ? '★★★★☆'
                : cleanProps === 5
                ? '★★★★★'
                : '☆☆☆☆☆'}
            </p>
        </div>
    )
}
export default Rating