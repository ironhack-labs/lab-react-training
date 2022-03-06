import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

function Ratings(props){
    const roundedRate = Math.round(props.children)
    let notas = []
    for (let i = 0; i<5; i++){
        i < roundedRate ?  notas.push(<StarIcon />) :notas.push(<StarBorderIcon />)
    }

    return(
        <div>
            {notas.map((element) => {
                return element
            })}            
        </div>
    )
};

export default Ratings;