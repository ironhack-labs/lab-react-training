import './DriverCard.css'
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const DriverCard = ({ name, rating, img, car }) => {

    const totalStars = 5;
    const activeStars = Math.round(rating);

    return (
        <div>
            <img src={img} />
            <p>{name}</p>
            <Box>
                {[...new Array(totalStars)].map((arr, index) => {
                    return index < activeStars ? <StarIcon /> : <StarBorderIcon />;
                })}
            </Box>
            <p>{car.model} - {car.licensePlate}</p>
        </div>
    )
}

export default DriverCard