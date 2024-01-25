function Random (props) {

    const { min, max } = props;

    const getRandomValue = () => {
        const randomValue = Math.random() * (max - min) + min;
        return Math.floor(randomValue);
      };




    return (

<div className="Random">
    <p>Random value between {min} and {max} : {getRandomValue()} </p>
</div>
    )

}


export default Random;