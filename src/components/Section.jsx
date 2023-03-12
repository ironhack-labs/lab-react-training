function Section({ title, children }) {
  return (
    <section className="m-3 ">
      <h2 className="lead fs-1 fw-bold">{title}</h2>
      {children}
    </section>
  );
}

export default Section;
