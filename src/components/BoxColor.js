function BoxColor(props) {
  const { r, g, b } = props;
  //   const randomR = Math.floor(Math.random() * r);
  //   const randomG = Math.floor(Math.random() * g);
  //   const randomB = Math.floor(Math.random() * b);
  return (
    <div
      style={{
        height: 100,
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        //backgroundColor: rgb(r, g, b),
      }}
    >
      Here!
    </div>
  );
}

export default BoxColor;
