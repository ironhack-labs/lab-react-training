import { useState } from "react";

const greetingsMap = {
  de: "Hallo",
  en: "Hello",
  es: "Hola",
  fr: "Bonjour",
};

const Greetings = ({ lang, children }) => {
  const [greeting, setGreeting] = useState(greetingsMap[lang]) || "No language";

  return (
    <div className="border p-4 mb-4">
      {greeting} {children}
    </div>
  );
};

export default Greetings;
