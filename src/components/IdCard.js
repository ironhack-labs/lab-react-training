function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="flex flex-col rounded-lg bg-white dark:bg-neutral-700 md:max-w-xl md:flex-row">
      <div className="flex-none w-48 relative">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={picture}
          alt={firstName}
        />
      </div>
      <div className="flex flex-col justify-start p-6">
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth.toISOString().split('T')[0]}</p>
      </div>
    </div>
  );
}
export default IdCard;
