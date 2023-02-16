import './styles.css'

const numRound = (n) => Math.round(n);

const Rating = ({ children, ...props }) => {
    const raiting = (num) => {
        let x = parseFloat(num);
        let numRounded = numRound(x);
        switch (numRounded) {
            case 5:
                return (
                    <>
                        <input id="radio1" type="radio" name="estrellas" value="5" checked readOnly />
                        <label for="radio1" readOnly>★</label>
                        <input id="radio2" type="radio" name="estrellas" value="4" readOnly />
                        <label for="radio2" readOnly>★</label>
                        <input id="radio3" type="radio" name="estrellas" value="3" readOnly />
                        <label for="radio3" readOnly>★</label>
                        <input id="radio4" type="radio" name="estrellas" value="2" readOnly />
                        <label for="radio4" readOnly>★</label>
                        <input id="radio5" type="radio" name="estrellas" value="1" readOnly />
                        <label for="radio5" readOnly>★</label>
                    </>
                )
            case 4:
                return (
                    <>
                        <input id="radio1" type="radio" name="estrellas" value="5" readOnly />
                        <label for="radio1">★</label>
                        <input id="radio2" type="radio" name="estrellas" value="4" checked readOnly />
                        <label for="radio2">★</label>
                        <input id="radio3" type="radio" name="estrellas" value="3" readOnly />
                        <label for="radio3">★</label>
                        <input id="radio4" type="radio" name="estrellas" value="2" readOnly />
                        <label for="radio4">★</label>
                        <input id="radio5" type="radio" name="estrellas" value="1" readOnly />
                        <label for="radio5">★</label>
                    </>
                )
            case 3:
                return (
                    <>
                        <input id="radio1" type="radio" name="estrellas" value="5" readOnly />
                        <label for="radio1">★</label><input id="radio2" type="radio" name="estrellas" value="4" readOnly />
                        <label for="radio2">★</label>
                        <input id="radio3" type="radio" name="estrellas" value="3" checked readOnly />
                        <label for="radio3">★</label>
                        <input id="radio4" type="radio" name="estrellas" value="2" readOnly />
                        <label for="radio4">★</label>
                        <input id="radio5" type="radio" name="estrellas" value="1" readOnly />
                        <label for="radio5">★</label>
                    </>
                )
            case 2:
                return (
                    <>
                        <input id="radio1" type="radio" name="estrellas" value="5" readOnly />
                        <label for="radio1">★</label>
                        <input id="radio2" type="radio" name="estrellas" value="4" readOnly />
                        <label for="radio2">★</label>
                        <input id="radio3" type="radio" name="estrellas" value="3" readOnly />
                        <label for="radio3">★</label>
                        <input id="radio4" type="radio" name="estrellas" value="2" checked readOnly />
                        <label for="radio4">★</label>
                        <input id="radio5" type="radio" name="estrellas" value="1" readOnly />
                        <label for="radio5">★</label>
                    </>
                )
            case 1:
                return (
                    <>
                        <input id="radio1" type="radio" name="estrellas" value="5" readOnly />
                        <label for="radio1">★</label>
                        <input id="radio2" type="radio" name="estrellas" value="4" readOnly />
                        <label for="radio2">★</label>
                        <input id="radio3" type="radio" name="estrellas" value="3" readOnly />
                        <label for="radio3">★</label>
                        <input id="radio4" type="radio" name="estrellas" value="2" readOnly />
                        <label for="radio4">★</label>
                        <input id="radio5" type="radio" name="estrellas" value="1" checked readOnly />
                        <label for="radio5">★</label>
                    </>
                )
            default:
                return (
                    <>
                        <input id="radio1" type="radio" name="estrellas" value="5" readOnly />
                        <label for="radio1">★</label>
                        <input id="radio2" type="radio" name="estrellas" value="4" readOnly />
                        <label for="radio2">★</label>
                        <input id="radio3" type="radio" name="estrellas" value="3" readOnly />
                        <label for="radio3">★</label>
                        <input id="radio4" type="radio" name="estrellas" value="2" readOnly />
                        <label for="radio4">★</label>
                        <input id="radio5" type="radio" name="estrellas" value="1" readOnly />
                        <label for="radio5">★</label>
                    </>
                )
        }
    }
    return (
        <form>
            <p className="clasificacion">{raiting(children)}</p>
        </form>
    );
};

export default Rating;