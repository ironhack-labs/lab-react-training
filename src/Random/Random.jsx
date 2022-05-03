const Random = ({ min, max }) => {

    

    return Math.floor((Math.random() * (max-min)) +min)
    


}

export default Random 