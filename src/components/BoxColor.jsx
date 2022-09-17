function BoxColor({ r, g, b }) {
  const rgbToHex =
    '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  return (
    <div>
      <div className="row mx-1 my-2">
        <div className="col">
          <div className="card border-dark">
            <div className="card-body" style={{ background: rgbToHex }}>
              <h4 className="card-text">
                rgb({r},{g},{b})
              </h4>
              <h4 className="card-text">{rgbToHex}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxColor;
