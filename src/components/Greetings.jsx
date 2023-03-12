function Greetings({ lang, children }) {

  let greeting = '';
  let flag = '';
  switch (lang) {
    case 'de':
      greeting = 'Hallo ';
      flag = "https://cdn-icons-png.flaticon.com/512/330/330523.png";
      break;
    case 'en':
      greeting = 'Hello ';
      flag = "https://cdn-icons-png.flaticon.com/512/330/330425.png";
      break;
    case 'fr':
      greeting = 'Bonjour ';
      flag = "https://cdn-icons-png.flaticon.com/512/330/330490.png";
      break;
    default:
      greeting = 'Qué pasa ';
      flag = "https://cdn-icons-png.flaticon.com/512/330/330557.png";
      break;
  }

  return (
    <div className="flex justify-center">
      <div className="card h-10 flex items-center rounded-full border-4 w-64 justify-center mb-2 hover:text-white hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:animate-pulse">
        <img src={flag} alt="" className='w-auto h-7 mr-2' />
        {greeting}
        {children}
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  lang: 'es',
  children: ''
}

export default Greetings;