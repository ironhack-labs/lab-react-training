import FacebookSimple from '../13. FacebookSimple/FacebookSimple';

const FacebookAdvancedButtons = ({ arrCountries }) => {
  const countries = [
    'England',
    'USA',
    'Malaysia',
    'Germany',
    'Scotland',
    'Kazakhstan',
    'Russia',
    'Brazil',
    'Catalonia',
    'France',
    'Israel',
    'Sweden',
    'Taiwan',
    'Norway',
    'Turkey',
  ];
  return (
    <div>
      {countries.map((country) => {
        return (
          <>
            
            <button
              className="btn btn-primary buttons"
              onClick={() => arrCountries(country)}
              key={country}
            >
              {country}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default FacebookAdvancedButtons;
