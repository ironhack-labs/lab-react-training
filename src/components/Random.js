function Random({ min, max }){
    min = Math.ceil(min);
    max = Math.floor(max);
    const resultado = Math.floor(Math.random() * (max - min) + min);
    return (
        <p className='random'> Random value between {min} and {max} {'=>'} {resultado}</p>
    )
}

export default Random;