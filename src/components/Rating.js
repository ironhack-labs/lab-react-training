export default function Rating({children}) {
    const starCount = Math.round(+children);
    
    return (
    <div>
        {'★'.repeat(starCount)}{'☆'.repeat(5-starCount)}
    </div>);
}