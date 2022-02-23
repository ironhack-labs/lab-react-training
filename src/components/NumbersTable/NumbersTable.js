const NumbersTable = ({ limit }) => {



    return (

        <section className="NumbersTable">
            {
                limit.map(number => {
                    return (
                        <tbody>
                            <tr>
                                {number}
                            </tr>
                        </tbody>
                    )
                })
            }
        </section>
    )
}

export default NumbersTable