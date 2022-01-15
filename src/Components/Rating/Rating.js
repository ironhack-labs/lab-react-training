
export const Rating = (props) => {

    const { children } = props;
    const rate = [];
    for(let i = 0; i < Math.round(children); i++){
        rate.push("★")
    }
    for(let i = Math.round(children); i < 5; i++){
        rate.push("☆")
    }
    return (
        <div>
            <div className="Rating">{rate}</div>
        </div>
    )
}