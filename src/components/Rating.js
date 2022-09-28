const Rating = (props) => {
    return (
        <div>
            {Math.round(props.children) === 0 ? <div>&#9734;&#9734;&#9734;&#9734;&#9734;</div>: 
             Math.round(props.children) === 1 ? <div>&#9733;&#9734;&#9734;&#9734;&#9734;</div> :
             Math.round(props.children) === 2 ? <div>&#9733;&#9733;&#9734;&#9734;&#9734;</div> :
             Math.round(props.children) === 3 ? <div>&#9733;&#9733;&#9733;&#9734;&#9734;</div> :
             Math.round(props.children) === 4 ? <div>&#9733;&#9733;&#9733;&#9733;&#9734;</div> :
             Math.round(props.children) === 5 ? <div>&#9733;&#9733;&#9733;&#9733;&#9733;</div> :
             'Something went wrong'}
        </div>
    )
}

export default Rating