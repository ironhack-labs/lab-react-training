import {useState} from 'react'

function LikeButton(props) {

    const {x} = props;
  
    let colorsArr = ['purple','blue','green','yellow','orange','red'];

    const [count , setCount] = useState(0);
    const [theme, setTheme] = useState('colorsArr[0]');
    
    const toggleTheme = (colorsArr) => {
        colorsArr.forEach(element => setTheme(element));
        return theme;
    }
    const divStyle = {backgroundColor: `${toggleTheme}`}
    
    
  
    return (
    <div>
        <button onClick={() => setCount((previous) => previous + 1)} style={divStyle}>{count} Likes</button>
    </div>
  )
}

export default LikeButton