import React from 'react';

const Greetings = (props) => {
  const { lang, children } = props;

  const getGreetings = (lang) => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hi';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hola';
    }
  };

  return (
    <li className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md flex">
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-indigo-600 truncate">
            {getGreetings(lang)} {children}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Greetings;
