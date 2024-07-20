import PropTypes from "prop-types";

function NumbersTable({ limit }) {

    const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-4 gap-2 p-4">
      {numbers.map((num) => (
        <div
          key={num}
          className={`w-12 h-12 flex items-center justify-center border border-gray-400 ${
            num % 2 === 0 ? 'bg-red-500 text-white' : 'bg-white'
          }`}
        >
          {num}
        </div>
      ))}
    </div>
  )
}

NumbersTable.propTypes = {
    limit: PropTypes.number.isRequired,
};

export default NumbersTable;