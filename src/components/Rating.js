

function Rating(props) {

    const { children, createStars } = props

    return (
        
            <div >
                <h1 className="cc-font">{createStars(children)}</h1>
            </div>

            
       
    )
}

export default Rating