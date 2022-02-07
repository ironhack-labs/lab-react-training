import Box from './Box';




function Random({ min, max, className}) {

    const randomNUmber = Math.floor(Math.random() * (max - min + 1) + min)

    return (
  
            <Box className={className}><p>Random value between: {min} and {max} {'=>'} {randomNUmber}</p></Box>

    )
}


export default Random