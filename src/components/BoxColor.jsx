
const BoxColor = (props) => {
    const {r, g, b} = props

    var styles = {
        colored: {
          backgroundColor: `rgb(${r}, ${g}, ${b})`
        }
      }

    return (
        <div>
            <p className="coloredBox" style={styles.colored}>
                rgb({r}, {g}, {b})
            </p>
        </div>
    )
}

export default BoxColor