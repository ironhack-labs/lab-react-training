const Idcard = ({ lastName, firstName, gender, height, birth, img }) => {
  return (
    <div
      className="flex gap-2 border-solid border-2 border-blue-800 p-2
    m-2"
    >
      <img className="w-32 h-32" src={img} alt={firstName} />
      <div className="flex flex-col">
        <ul>
          <li>
            <span className="text-bold">First name:</span> {firstName}
          </li>
          <li>
            <span className="text-bold">Last name:</span> {lastName}
          </li>
          <li>
            <span className="text-bold">Gender:</span> {gender}
          </li>
          <li>
            <span className="text-bold">Height:</span> {height}
          </li>
          <li>
            <span className="text-bold">Birth:</span> {birth}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Idcard;
