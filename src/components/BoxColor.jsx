function BoxColor({ r, g, b }) {
  const color = { r, g, b };

  const numToRGB = (colorObj) => {
    return 'rgb(' + colorObj.r + ',' + colorObj.g + ',' + colorObj.b + ')';
  };

  const rgbToHex = (colorObj) => {
    let result = '';
    Object.values(colorObj).forEach((val) => {
      val = val.toString(16);
      val.length === 1 ? (result += '0' + val) : (result += val);
    });
    return '#' + result;
  };

  return (
    <article
      style={{
        backgroundColor: numToRGB(color),
      }}
    >
      <p
        style={{
          backgroundColor: 'white',
          margin: '0 auto',
          padding: '0.5rem',
          textAlign: 'center',
          width: 'max-content',
        }}
      >
        {numToRGB(color)}
        <br />
        {rgbToHex(color)}
      </p>
    </article>
  );
}

export default BoxColor;
