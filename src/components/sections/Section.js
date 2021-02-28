function Section({title, children}) {
    return (
        <section className="my-3 ">
        <h1 className="mb-3 fw-bold ">{title}</h1>
        {children}
      </section>
    )
}

export default Section


