

function Buttons(props) {

    const { id, uniqueCountriesArr, highlightFunction, countryToHighlight, highlightAll } = props


    return (

        <div className='container'>
            <div className='row'>

                {
                    (id === 'btn1')

                        ?

                        ((countryToHighlight === 'allCountries')

                            ?

                            <div className='col-sm-2 d-flex justify-content-start'>
                                <button  class="btn btn-light m-2" onClick={highlightAll} style={{ backgroundColor: 'lightblue' }} >
                                    All
                                </button>
                            </div>

                            :

                            <div className='col-sm-2 d-flex justify-content-start'>
                                <button  class="btn btn-light m-2" onClick={highlightAll} style={{ backgroundColor: 'white' }} >
                                    All
                                </button>
                            </div>
                        )

                        :

                        //else if id === 'btn2'

                        uniqueCountriesArr.map((country) => {
                            if (countryToHighlight === country || countryToHighlight === 'allCountries') {
                                return (
                                    <div key={uniqueCountriesArr.indexOf(country)} className='col-sm-2 d-flex justify-content-start'>
                                        <button  class="btn btn-light m-2" onClick={highlightFunction} style={{ backgroundColor: "lightblue" }}>
                                            {country}
                                        </button>
                                    </div>
                                )

                            }
                            else {
                                return (
                                    <div key={uniqueCountriesArr.indexOf(country)} className='col-sm-2 d-flex justify-content-start'>
                                        <button class="btn btn-light m-2" onClick={highlightFunction} style={{ backgroundColor: "white" }}>
                                            {country}
                                        </button>
                                    </div>
                                )

                            }

                        })
                }
            </div>
        </div>

    )

}

export default Buttons;