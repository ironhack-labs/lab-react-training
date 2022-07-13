function Random(props) {
  let randomInteger = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );
  console.log(randomInteger);
  return `Random value between ${props.min} and ${props.max} => ${randomInteger}`;
}

/* const [contacts, setContacts] = useState(firstContacts); */

/* function handleContact() {
  const randomContact =
    contactData[Math.floor(Math.random() * contactData.length)];
  setContacts([randomContact, ...contacts]);
  return randomContact;
} */

export default Random;
