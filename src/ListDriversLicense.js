import DriversLicense from "./DriversLicense";
import './ListDriversLicense.css';

const ListDriversLicense = ({title}) => {
    return (
      <section className="ListDriversLicense">
        <h2>{title}</h2>
        <DriversLicense
          name="Travis Kalanick"
          rating={2.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />
        <DriversLicense
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </section>
    );
}
 
export default ListDriversLicense;