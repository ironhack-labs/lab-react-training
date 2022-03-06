function Random (props) {
    console.log(props);
    const min = props.min;
    const max = props.max;
    const numeroRandom = Math.round(min + Math.random() * (max - min));
    // const numeroRandomReal = Math.round(min + Math.random() * (max - min));



    return (
        <div>
            Random value between {min} and {max} = {numeroRandom}
        </div>
    )
    // if (props.number === "seis"){
    // return <div>Random value between 1 and 6 = {numeroRandomSix}.</div>;
    // } else if (props.number === "cem"){
    //     return <div> Random value between 1 and 100 = {numeroRandomReal}.</div>
    // } else;
};

export default Random
