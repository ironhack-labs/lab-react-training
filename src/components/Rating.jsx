const Rating = ({children}) =>{

    const numberFormat = Math.round(children);
    
    return(
        <div className="Rating">
            <h1>
            {'★'.repeat(numberFormat) +  '☆'.repeat(5-numberFormat)}
            </h1>
        </div>
    )
}

export default Rating