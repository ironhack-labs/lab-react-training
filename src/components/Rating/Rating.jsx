import './Rating.css'

const Rating = ({ children }) => {

    if (children === '0') { return <div className='stars'>☆ ☆ ☆ ☆ ☆</div> }
    else if (children < '1.5') { return <div className='stars'>★ ☆ ☆ ☆ ☆</div> }
    else if (children >= '1.5' && children < '3') { return <div className='stars'>★ ★ ☆ ☆ ☆</div> }
    else if (children >= '3' && children < '4') { return <div className='stars'>★ ★ ★ ☆ ☆</div> }
    else if (children >= '4' && children < '5') { return <div className='stars'>★ ★ ★ ★ ☆</div> }
    else if (children >= '5') { return <div className='stars'>★ ★ ★ ★ ★</div> }
}

export default Rating