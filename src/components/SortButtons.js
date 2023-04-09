

function SortButtons(props){

    const {sortByCountry} = props
    return(
        <div>
            <button class="btn btn-light m-3" onClick={sortByCountry}>
                Sort By Country Alphabetically
            </button>
        </div>
    )
}
export default SortButtons