function BoxColor(props) {
    const { r, g, b } = props;
    const style = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '100px',
    height: '100px',
};
    return <div style={style}></div>;
}

export default BoxColor;