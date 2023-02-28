import './BoxColor.css'


const BoxColor = (props) => {
    const { r, g, b } = props;
    const color = `rgb(${r}, ${g}, ${b})`;
    const style = {
        backgroundColor: color,
        width: '600px',
        height: '50px',
        border: '2px solid ',
        margin: '20px',
        textAling: 'center',
        padding: '30px'
    };

    return <div style={style}>rgb {r},{g},{b} </div>;
}


export default BoxColor