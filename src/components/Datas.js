import './Datas.css'

function Datas(props) {
    const { lastName, firstName, gender, height, birth } = props;
    return(
        <div className="Datas">
            <b>First Name:</b> {firstName}<br/>
            <b>Last Name:</b> {lastName}<br/>
            <b>Gender:</b> {gender}<br/>
            <b>Height:</b> {height}<br/>
            <b>Birth:</b> {birth}
        </div>
    )
}
export default Datas;   