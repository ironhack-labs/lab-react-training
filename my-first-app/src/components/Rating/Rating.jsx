import './Rating.css'

const Rating = ({ children }) => {
    const chil = Math.round(children)

    if( chil === 0){
        return <h2>☆☆☆☆☆</h2>
    }else if( chil > 0 && chil <= 1){
        return <h2>★☆☆☆☆</h2>
    }else if( chil > 1 && chil <= 2){
        return <h2>★★☆☆☆</h2>
    }else if( chil > 2 && chil <= 3){
        return <h2>★★★☆☆</h2>
    }else if( chil > 3 && chil <= 4){
        return <h2>★★★★☆</h2>
    }else if( chil > 4  ){
        return <h2>★★★★★</h2>
    }
}
export default Rating