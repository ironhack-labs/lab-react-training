function BoxColor({ color, intensity }) {

  return (
    <div className='flex justify-center'>
      <div className={`bg-${color}-${intensity} px-8 py-2 rounded-xl`}>
        <span>Tailwind color: <b>{color.toUpperCase()}</b> with an intensity of: {intensity}</span>
      </div>
    </div>
  );
}

BoxColor.defaultProps = {
  color: '',
  intensity: ''
}

export default BoxColor;

