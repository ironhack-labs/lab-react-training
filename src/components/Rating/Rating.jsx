import './Rating.css'

const Rating = ({ children }) => {

    function convertirARating(children) {
        var numero = children
        var rating = '';
        var estrellaLlena = '★';
        var estrellaVacia = '☆';

        var ratingRedondeado = Math.round(numero);

        for (var i = 0; i < ratingRedondeado; i++) {
            rating += estrellaLlena;
        }

        for (var j = ratingRedondeado; j < 5; j++) {
            rating += estrellaVacia;
        }

        return rating
    }

    return <p>{convertirARating(children)}</p>
}

export default Rating
