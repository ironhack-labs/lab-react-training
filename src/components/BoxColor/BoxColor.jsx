import './BoxColor.css'

const BoxColor = ({r, g, b}) => {

    const backgroundColor = `rgb(${ r }, ${ g }, ${ b })`
    return (
        <div className='background' style={{backgroundColor}}>
            <h2>rgb({r}, {g}, {b})</h2>
        </div>
        )
}


export default BoxColor