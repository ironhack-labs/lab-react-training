const children = ({children}) =>{
    let symbols
if(children<=1){
    symbols ="☆☆☆☆☆"
}else if(children>=1 && children<1.5){
    symbols = "★☆☆☆☆"
}
else if (children >= 1.5 && children < 2.5) {
    symbols = "★★☆☆☆"
}
else if (children >= 2.5 && children <= 3.5) {
    symbols = "★★★☆☆"
}
else if (children >= 3.5 && children < 4.5) {
    symbols = "★★★★☆"
}
else if (children >=4.5) {
    symbols = "★★★★★"
}

    return(
        <div>
            <span>{symbols}</span>
        </div>
    )
}
export default children