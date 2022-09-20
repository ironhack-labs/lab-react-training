
function Random ({min, max}) {
    const num = Math.floor(Math.random() * (max - min) + min);
    return (
        <div>
          <p> Random Value between {min} and {max} {'=>'} {num}</p>  
        </div>
    )
}

export default Random;

