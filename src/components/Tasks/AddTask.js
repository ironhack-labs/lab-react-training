import React, {useState} from 'react';

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState('A');

  const handleInputchange = (e) => {
    console.log(e.target.value);
    setInputData(e.target.value);
  };
const onClick = () => {
  handleTaskAddition(inputData)
  setInputData(' ')
}
  return (
    <div>
      <input onChange={handleInputchange} type="text" value={inputData} />
      <button onClick={onClick} className="button">
        Send
      </button>
    </div>
  );
};

export default AddTask;
