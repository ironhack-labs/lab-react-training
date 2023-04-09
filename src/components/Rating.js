function Rating({children}){


    return (
        <>
        {children >= 0 && children < 0.5 && <p>☆☆☆☆☆</p>}
        {children >= 0.5 && children < 1.5 && <p>★☆☆☆☆</p>}
        {children >= 1.5 && children < 2.5 && <p>★★☆☆☆</p>}
        {children >= 2.5 && children < 3.5 && <p>★★★☆☆</p>}
        {children >= 3.5 && children < 4.5 && <p>★★★★☆</p>}
        {children >= 4.5 && children <= 5 && <p>★★★★★</p>}
        </>
    )
}
export default Rating