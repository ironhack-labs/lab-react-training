const Rating = (props) => {
  const rating = Math.round(props.children);
  const starts = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
  };
    return (
        <>
            {
                starts[rating] || 0
            }
      </>
  )
};

export default Rating;
