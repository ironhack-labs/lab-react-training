import './BoxColor.css';

function BoxColor({r,g,b}) {
  
    return (  
        
        <div style={{ 
            backgroundColor: `rgb(${r},${g},${b})` 
            }}> 
        <p> r={r} g={g} b={b}</p>
        </div>
    );
}

export default BoxColor; 
