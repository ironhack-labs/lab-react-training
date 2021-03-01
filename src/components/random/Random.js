function Random(min, max){

    const limits = min
    
    let minNum = limits.min;
    let maxNum = limits.max;

    let randomNum = Math.floor(Math.random(maxNum - minNum) * maxNum)

    if (randomNum > maxNum){      
        randomNum = maxNum
    } else if (randomNum < minNum) {   
        randomNum = minNum
    } else {
    }

    return(
        <div className="border border-dark p-2 m-1">
            <h5>Random Value between {minNum} and {maxNum}  - || {randomNum} ||</h5>
        </div>
    );
}

export default Random;