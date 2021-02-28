function Section({ title, children }) {
  return (
    <section className="my-3 text-start ms-3 me-3">
      <h1 className="mb-3 fw-bold ">{title}</h1>
      {children}
    </section>
  )
}

export default Section


