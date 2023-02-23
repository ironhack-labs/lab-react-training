export const Random =(props) => {
    const {max} = props;
    if (max === 6) {
        return(<p>Random value between 1 and 6 => 3</p>);
    }else{
        return(<p>Random value between 1 and 100 => 45</p>);
    }
}