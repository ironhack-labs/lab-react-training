import './Random.css';

function Random ({min , max}){
        return (
          <h3 className="border text-start">
      Random value between {min} and {max} {'=>'}
      {Math.floor(Math.random() * (max - min + 1) + min)}
          </h3>
        );
}


export default Random; 