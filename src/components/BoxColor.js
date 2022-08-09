import './BoxColor.css'

function BoxColor (props) {
    const { r, g, b } = props;
    return (
        <div className='boxcolor' style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
           <p>rgb({r}, {g}, {b})</p>
        </div>
    );
};
export default BoxColor;