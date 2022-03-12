function FacebookListButtons(props) {
  const mappedButtons = props.list.map((element, index) => (
    <button
      key={element + index}
      style={{
        backgroundColor: element === props.countryValue ? 'blue' : 'white',
      }}
      onClick={(_) => props.setCountry(element)}
    >
      {element}
    </button>
  ));

  return mappedButtons;
}

export default FacebookListButtons;
