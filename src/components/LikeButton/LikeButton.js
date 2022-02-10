import { Component } from 'react'

class LikeButton extends Component {

    state = {
        count: 0
    }

    handleCountUp() {
        this.setState((state, props) => {
            const { count } = state
            return { count: count + 1 }
        })
    }

    handleCountDown () {
        this.setState((state, props) => {
            const {count} = state
            const {min} = props
            if(count > min ){
                return {count : count - 1}
            }
           
        })
    }

    handleReset() { this.setState({ count: 0 }) }

    render() {
        const { count } = this.state
        const {min} = this.props
        return (

            <div className=' d-flex flex-column  bg-light rounded-3'>
                <h2 className='align-self-center mb-2 mt-2 fw-light' onClick={() => this.handleReset()}>{count}</h2>
                <div className='g-grid align-self-center d-block'>
                    <button className='btn btn-primary me-2 fa fa-like' onClick={() => this.handleCountUp()}>Like</button>
                    <button disabled={count === min} className='btn btn-secondary ' onClick={ () => this.handleCountDown()}>disLike</button>
                </div>
            </div>

        )
    }


}

export default LikeButton



