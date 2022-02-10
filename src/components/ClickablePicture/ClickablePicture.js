import { Component } from 'react'
import maxence from '../../assets/images/maxence.png'
import maxenceglasses from '../../assets/images/maxence-glasses.png'

class ClickablePicture extends Component {

    state = {
        imgSrc: false,
    }

    handlePic() {
        this.setState((state) => {
            
            return {imgSrc: !state.imgSrc}
        })
    }

    render() {


        let image;

        if (this.state.imgSrc === true) {
            image = maxenceglasses
        } else {
            image = maxence
        }
        return (
            <div className='mt-5'>
                <img className='img-thumbnail p-3 rounded rounded-3' onClick={() => this.handlePic()} src={image} alt="sin gafas" />
            </div>
            
        )

    }





}
export default ClickablePicture





