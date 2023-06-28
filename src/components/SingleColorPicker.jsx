export default function SingleColorPicket(props) {
  const handleChange = (e) => {
    props.onChange({ [props.color]: e });
  };

  return (
    <>
      <div style={{ backgroundColor: [props.color] }}>
        <input
          type="number"
          max={255}
          min={0}
          value={props.value}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
}
