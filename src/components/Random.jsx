

// eslint-disable-next-line react/prop-types
const Random = ({ min, max }) => {
    const randomValue = Math.floor(Math.random() * (max - min + 1) + min);


return (
<div className="card mb-3">
    <h2>
        Random value between {min} and {max} =&gt; {randomValue}
        </h2>
    </div>
)
}
export default Random;
