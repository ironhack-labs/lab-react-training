import React, { useState } from 'react';

export default function ClickablePicture({img, imgClicked}) {

    const [clicked, setClicked] = useState(false);
    const [pic, setPic] = useState('empty');

    if (pic === 'empty') {
        setPic(img);
    }

    return (
        <div className='picCont'>
            <img src={pic} onClick={
                (e) => {
                    if(clicked) {
                        setClicked(false);
                        setPic(img);
                    } else {
                        setClicked(true);
                        setPic(imgClicked);
                    }
                }
            }/>
        </div>
    )

}