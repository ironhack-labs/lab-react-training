import './NumbersTable.css'

const NumbersTable = ({limit,...props}) => {
    return(
        <div className="numbers-container">
            <div className="num-div">
                <div Style='background-color: red; border: solid 3px black;' className="numb">
                    <p>{limit}</p>
                </div>
            </div>
        </div>
    );
};

export default NumbersTable;