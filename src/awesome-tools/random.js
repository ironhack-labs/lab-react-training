const random = {
    num: (num) => Math.floor(Math.random() * num),
    color: () => Math.floor(Math.random() * 256),
    lang: () => {
      const diffLang = ['en', 'es', 'de', 'fr'];
      return diffLang[Math.floor(Math.random() * diffLang.length)];
    },
  };

export default random