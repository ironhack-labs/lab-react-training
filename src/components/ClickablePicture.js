function ClickablePicture(props) {
  console.log(props.img);
  return (
    <a href={props.imgClicked}>
      <img src={props.img} />
    </a>
  );
}

export default ClickablePicture;
