//jshint esversion:8
export const Random = ({min, max}) => {
    let randNum = Math.floor(Math.random() * max) + min;

    return (

        <div className="Random"> 
            <p>Random number between {min} and {max} => {randNum}</p>
        </div>
    );
};