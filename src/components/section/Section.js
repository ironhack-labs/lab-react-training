
function Section({ title, children }) {
    return (
      <section className="Section mb-5">
        <h1 className="text-left mb-4">{title}</h1>
        {children}
      </section>
    );
  }
  
  export default Section;
  