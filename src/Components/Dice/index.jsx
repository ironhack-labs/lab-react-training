const Dice = ({firstimg,secondimg,thirdimg}) =>{
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
      };
    return (
        <div>
            <img ></img>
        </div>
    )

}



const ClickablePicture = ({ img, imgClicked }) => {
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  
    return (
      <div>
        <img src={isClicked ? imgClicked : img} alt="" onClick={handleClick}/>
      </div>
    );
  };
  