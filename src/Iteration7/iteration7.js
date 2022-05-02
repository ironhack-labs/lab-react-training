import DriverCard from "./DriverCard"
import "./styles.css"


const Iteration7 = () => {

    return (
        <div className="iteration7">
            <DriverCard
                name="Travis Kalanick"
                rating={4.2}
                img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
                car={{
                    model: "Toyota Corolla Altis",
                    licensePlate: "CO42DE"
                }}
            />

            <DriverCard
                name="Dara Khosrowshahi"
                rating={4.9}
                img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
                car={{
                    model: "Audi A3",
                    licensePlate: "BE33ER"
                }}
            />
        </div>
    )
}

export default Iteration7