function Section({ title, children }) {
  return (
    <section className="m-3 ">
      <h2 className="text-danger-emphasis lead fs-1 fw-bold">{title}</h2>
      <hr />
      {children}
    </section>
  );
}

export default Section;
