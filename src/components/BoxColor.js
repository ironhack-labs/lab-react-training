export default function BoxColor({r, g, b}) {
    const style = { backgroundColor: `rgb(${r},${g},${b})` };
    const toHexa= num => num.toString(16).padStart(2, '0');
    return (
    <div className="box-with-text center" style={style}>
        <p>rgb({r},{g},{b})</p>
        <p>#{toHexa(r)}{toHexa(g)}{toHexa(b)}</p>
    </div>);
}