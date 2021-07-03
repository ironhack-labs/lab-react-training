import React, {useState} from 'react';

import './LikeButton.css';

const LikeButton = ({title}) => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const colors = [
      '#cc1a97',
      '#b319ab',
      '#b90078',
      '#9e194d',
      '#a32100',
      '#a10b2b',
      '#a90636',
      '#a10045',
      '#6c2b11',
      '#681916',
    ];

    let style1 = {
      color: 'white',
      background: colors[count1],
    };
    let style2 = {
      color: 'white',
      background: colors[count2],
    };
    let style3 = {
      color: 'white',
      background: colors[count3],
    };

    return (
      <section className="LikeButton">
        <h2>{title}</h2>
        <h5>You can like us 10 times and then it's all dust.</h5>
        <div className="LikeButton__wrapper">
          <button
            style={style1}
            onClick={() => setCount1((prevCount) => prevCount < 10 ? prevCount + 1 : prevCount - 10)}
          >
            {count1} {count1 === 0 || count1 < 2 ? 'likes' : 'like'}
          </button>
          <button
            style={style2}
            onClick={() => setCount2((prevCount) => prevCount < 10 ? prevCount + 1 : prevCount - 10)}
          >
            {count2} {count2 === 0 || count2 < 2 ? 'likes' : 'like'}
          </button>
          <button
            style={style3}
            onClick={() => setCount3((prevCount) => prevCount < 10 ? prevCount + 1 : prevCount - 10)}
          >
            {count3} {count3 === 0 || count3 < 2 ? 'likes' : 'like'}
          </button>
        </div>
      </section>
    );
}

export default LikeButton