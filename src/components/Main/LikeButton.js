


const LikeButton = () => {
    let clicks1=0
    let count2=0
    const color = ['purple','blue','green','yellow','orange','red']

    

    function like (){
        clicks1 += 1;
        document.getElementById('b1').innerHTML = clicks1;
        console.log('like');
    }



    return (
        <div>
            <button onClick="like()" id='b1'>{clicks1}Likes</button>
            <button id='b2'>Likes</button>
        </div>
    )
}
export default LikeButton
