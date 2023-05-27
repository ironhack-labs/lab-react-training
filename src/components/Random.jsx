import { useEffect, useState } from "react"

const Random = ({min, max}) => {
    const [random, setRandom] = useState(0);

    useEffect(() => {
        const generateRandomNumber = () => {
            const randomNum = Math.floor(Math.random() * (max - min +1) + min);
            setRandom(randomNum)
        };
        generateRandomNumber();
    },[min, max]); 

  return (
    <div className="border-solid border-2 border-blue-800 p-2 m-2">
      <p>Random value between {min} and {max} = {random}</p>
    </div>
  )
}

export default Random
