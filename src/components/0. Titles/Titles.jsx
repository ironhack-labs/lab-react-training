const Titles = (props) => {
  const { num, title, } = props;
  return (
    <h1 className="Title">
      <b>
        Iteration {num} | Component: {title}
      </b>
    </h1>
  );
};

export default Titles;
