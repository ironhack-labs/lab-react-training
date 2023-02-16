import { height } from "@mui/system"


const BoxColor = ({r,g,b,...props}) => {
    return (
        <div Style={`background-color: rgb(${r},${g},${b})`}>
            <p Style={"height: 60px"}>{`rgb(${r},${g},${b})`}</p>
        </div>
    )
}

export default BoxColor