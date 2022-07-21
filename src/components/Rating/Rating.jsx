import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Rating = ({ children }) => {
    const totalStars = 5;
    const activeStars = Math.round(children);

    return (
        <Box>
            {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStars ? <StarIcon /> : <StarBorderIcon />;
            })}
        </Box>
    );
};

export default Rating;