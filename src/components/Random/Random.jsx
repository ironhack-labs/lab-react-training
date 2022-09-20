import './Random.css'

const Random = (props) =>{

    let randomNumber =  Math.floor(
        Math.random() * (props.max - props.min + 1) + props.min
      )

      return (
        <>
            <p className='randomNumParagraph'>
            Random value between {props.min} and {props.max} is {randomNumber}
            </p>
        </>
      )

}

export default Random;