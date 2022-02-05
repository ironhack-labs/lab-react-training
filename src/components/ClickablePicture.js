

function ClickablePicture(props){
    console.log(props.img,'-----', props.imgClicked)
    return (
        <div>
            <img src="../assets/images/maxence.png" alt="no image available"/>
            <br/>
            <img src={props.imgClicked} alt="no image available"/>
        </div>
    )
}

export default ClickablePicture;