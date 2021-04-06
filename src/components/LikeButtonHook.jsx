import React, { useState } from 'react';

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

export default function LikeButtonHook() {

    const [{counter, currentColor}, setState] = useState({counter: 0, currentColor: 0}) ;

    const increment = () => {
        setState({
            counter: counter + 1,
            currentColor: (currentColor + 1) % 6,
        });
    };


    return (
        <div>
        <button
          onClick={increment}
          style={{ backgroundColor: colors[currentColor] }}
        >
          {counter} {counter > 1 ? 'likes' : 'like'}
        </button>
      </div>
    )
}

