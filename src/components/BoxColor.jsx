
const BoxColor = (props) => {
    const {r, g, b} = props

    var styles = {
        colored: {
          'background-color': `rgb(${r}, ${g}, ${b})`
        }
      }

    return (
        <div>
            <p class="coloredBox" style={styles.colored}>
                rgb({r}, {g}, {b})
            </p>
        </div>
    )
}

export default BoxColor