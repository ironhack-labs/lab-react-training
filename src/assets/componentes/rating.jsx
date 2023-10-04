/* eslint-disable react/prop-types */
function Rating({children}) {
    const rounded = Math.round(children); //Redondeo a número entero//
    const fill = "★".repeat(rounded); //devuelve una nueva cadena que contiene el número de copias//
    const empty = "☆".repeat(5 - rounded);//estrellas vacías menos el número que tengo rellenas//
    return <div style={{ fontSize: "60px" }}>{fill}{empty}</div>;
}
export default Rating;