import { useState } from "react";

function LikeButton() {
    
    const colors = ['purple','blue','green','yellow','orange','red']
    let [like, setLike] = useState({likes : 0, color: 0}); // mettre en objet une variable pour les like et les couleur qui démarre à 0
    console.log(like)


    function change () {
        setLike ({likes: like.likes + 1, color:(like.color + 1) % colors.length}) // % permet de boucler le tableau colors
        
    }

    const style = {backgroundColor: colors[like.color]} // prend l'index du tableau color pour affecter à color la couleur de l'index
    
    return (
        <button onClick={change} style={style}> {/* on appelle la function change*/}
           {`${like.likes}likes`} {/* on affiche les résultat de setLike*/}
        </button>
    );
  }
  
export default LikeButton;