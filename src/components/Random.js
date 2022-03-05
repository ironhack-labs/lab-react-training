function Random (props) {
    console.log(props);
    const min = 1;
    const max = 100;
    const kindOfMax = 6;
    const numeroRandomSix = Math.round(min + Math.random() * (kindOfMax - min));
    const numeroRandomReal = Math.round(min + Math.random() * (max - min));
    if (props.number === "seis"){
    return <div>Random value between 1 and 6 = {numeroRandomSix}.</div>;
    } else if (props.number === "cem"){
        return <div> Random value between 1 and 100 = {numeroRandomReal}.</div>
    } else;
};

export default Random
