//jshint esversion:8
export const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    let year = birth.getFullYear();
    let month;
    if(birth.getMonth() === 0) {
        month = "Jan";
    }
    if(birth.getMonth() === 1) {
        month = "Feb";
    }
    if(birth.getMonth() === 2) {
        month = "Mar";
    }
    if(birth.getMonth() === 3) {
        month = "Apr";
    }
    if(birth.getMonth() === 4) {
        month = "May";
    }
    if(birth.getMonth() === 5) {
        month = "Jun";
    }
    if(birth.getMonth() === 6) {
        month = "Jul";
    }
    if(birth.getMonth() === 7) {
        month = "Aug";
    }
    if(birth.getMonth() === 8) {
        month = "Sep";
    }
    if(birth.getMonth() === 9) {
        month = "Oct";
    }
    if(birth.getMonth() === 10) {
        month = "Nov";
    }
    if(birth.getMonth() === 11) {
        month = "Dec";
    }
    let day;
    if(birth.getDay() === 0) {
        day = "Sun";
    }
    if(birth.getDay() === 1) {
        day = "Mon";
    }
    if(birth.getDay() === 2) {
        day = "Tue";
    }
    if(birth.getDay() === 3) {
        day = "Wed";
    }
    if(birth.getDay() === 4) {
        day = "Thu";
    }
    if(birth.getDay() === 5) {
        day = "Fri";
    }
    if(birth.getDay() === 6) {
        day = "Sat";
    }
    return (
        <div className="Id-card">
            <img src={picture} alt="Id card" />
            <div>
                <span><b>First Name:</b> {firstName}</span> <br />
                <span><b>Last Name:</b> {lastName}</span> <br />
                <span><b>Gender:</b> {gender}</span> <br />
                <span><b>Height:</b> {height}</span> <br />
                <span><b>Birth:</b> {day} {month} {year}</span>
            </div>
        </div>
    );
};