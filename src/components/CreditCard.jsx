import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/mastercard.png'


const CreditCard = (props) => {
    const imgLogo = (props.type === 'visa') ? visa : mastercard 
  return (
    <div className="bg-white px-2 mt-3">
      <div
        className={`max-w-md mx-auto ${props.bgColor} rounded-lg overflow-hidden md:max-w-sm`}
      >
        <div className="md:flex">
          <div className="w-full p-4">
            <div
              className={`flex justify-end w-full items-center text-${props.color}`}
            >
              <img
                src={imgLogo}
                alt=""
                className="h-10 object-contain"
              />
            </div>
            <div className="flex justify-between items-center mt-10">
              <div className="flex flex-row mx-1">
                <span className={`text-5xl text-${props.color}`}> •</span>
                <span className={`text-5xl text-${props.color}`}> •</span>
                <span className={`text-5xl text-${props.color}`}> •</span>
                <span className={`text-5xl text-${props.color}`}> •</span>
              </div>
              <div className="flex flex-row mx-1">
                <span className={`text-5xl text-${props.color}`}> •</span>
                <span className={`text-5xl text-${props.color}`}> •</span>
                <span className={`text-5xl text-${props.color}`}> •</span>
                <span className={`text-5xl text-${props.color}`}> •</span>
              </div>
              <div className="flex flex-row mx-1">
                <span className={`text-5xl text-${props.color}`}> •</span>
                <span className={`text-5xl text-${props.color}`}> •</span>
                <span className={`text-5xl text-${props.color}`}> •</span>
                <span className={`text-5xl text-${props.color}`}> •</span>
              </div>
              <div className="flex flex-row mx-1">
                <span className={`text-${props.color} text-lg pt-2 font-bold`}>
                  {props.number.slice(-4)}
                </span>
              </div>
            </div>
            <div
              className={`mt-8 flex justify-between items-center text-${props.color}`}
            >
              <div className="flex flex-col">
                {' '}
                <span className={`font-bold text-${props.color} text-sm`}>
                  {props.bank}
                </span>{' '}
                <span className="font-bold">{props.owner}</span>{' '}
              </div>
              <div className="flex flex-col">
                {' '}
                <span className={`font-bold text-${props.color} text-sm`}>
                  Expires
                </span>{' '}
                <span className="font-bold">
                  {props.expirationMonth}/{props.expirationYear}
                </span>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
