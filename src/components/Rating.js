export default function Rating({children}) {
    const starCount = Math.round(+children);
    
    return (
    <div className="box-with-text">
        {'★'.repeat(starCount)}{'☆'.repeat(5-starCount)}
    </div>);
}