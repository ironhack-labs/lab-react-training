

function Rating (props){
    console.log(`from app`, props)
    // console.log(Math.round(props.children))

    const rating = ['☆','☆','☆','☆','☆']

    const result = rating.slice(Math.round(props.children))
    for (let i=0; i<=Math.round(props.children)-1; i++){
        result.unshift('★')
    }

    // console.log(result)

        return (
            <div>
                <p>
                    {result}
                </p>
            </div>
        )


}

export default Rating;