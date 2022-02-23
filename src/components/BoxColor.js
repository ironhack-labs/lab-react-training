
export default function BoxColor(props) {
   const rHex = (props.r).toString(16)
   const gHex = (props.g).toString(16)
   const bHex = (props.b).toString(16)
   
   const divStyle = {
    background: `#${rHex}${gHex}${bHex}`,
    color: 'white',
    width: '300px',
    padding: '10px',
    textAlign: 'center',
    marginBottom: '20px'
  };

  return (
    <div style={divStyle}>
        <p>rgb({props.r}{props.g}{props.b})</p>
        <p>#{rHex}{gHex}{bHex}</p>
    </div>
  )
}
