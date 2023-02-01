
const BoxColor = ({r,g,b, ...props}) => {
    return(
        <div Style={`background-color: rgb(${r},${g},${b})`}>
            <p>{`rgb(${r},${b},${b})`}</p>
            <p></p>
        </div>
    );
};

export default BoxColor;