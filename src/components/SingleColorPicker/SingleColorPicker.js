import { Component } from 'react'

class SingleColorPicker extends Component {

  render() {
    const { color, value, onChange } = this.props

    return (
      <div>
        <label htmlFor="value">{color}: </label>
        <input type="number" value={value} name={color} onChange={onChange} />
      </div>
    )
  }
}

export default SingleColorPicker