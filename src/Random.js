function Random({ min, max }) {



    function getRandomArbitrary(min, max) {

        let randomNumber = Math.floor(Math.random() * (max - min) + min)

        return randomNumber

    }

    return (
        <>

            < p > random value between {max} and {min} = {getRandomArbitrary(min, max)} </p >
        </>

    )


}



export default Random