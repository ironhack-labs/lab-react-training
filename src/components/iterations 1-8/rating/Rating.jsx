function Rating({ children }) {
    const roundedScore = Math.round(children);
    const fill = "★".repeat(roundedScore);
    const empty = "☆".repeat(5 -roundedScore);

    return (
        <div className="fs-2" title={ children } >{fill}{empty}</div>
    )

}

export default Rating;