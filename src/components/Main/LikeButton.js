const LikeButton = () => {

    let count1=0
    let count2=0



    const color = ['purple','blue','green','yellow','orange','red']

function like (){
    count1++
console.log("like");
} 
document.getElementById("b1").onclick=like


    return (
        <div>
            <button onclick="like()" id= "b1">{count1}Likes</button>
            <button onclick="like()" id= "b2">Likes</button>
        </div>
    )
}

export default LikeButton
