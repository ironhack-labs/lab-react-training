function BoxColor({ r, g, b }) {

  const rgb = `rgb(${r}, ${g}, ${b})`;
  console.log(rgb);

  const changeStyles = {
    backgroundColor: rgb,
  };

  return (
    <div className='flex justify-center mb-4'>
      <div style={changeStyles} className='px-8 py-2 rounded-xl'>
        <span>RGB color: {r}, {g}, {b} </span>
      </div>
    </div>
  );
}

BoxColor.defaultProps = {
  r: '',
  g: '',
  b: ''
}

export default BoxColor;

