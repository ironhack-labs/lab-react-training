// const random = {
//   num: (num) => Math.floor(Math.random() * num),
//   color: () => Math.floor(Math.random() * 256),
//   lang: () => {
//     const diffLang = ['en', 'es', 'de', 'fr'];
//     return diffLang[Math.floor(Math.random() * diffLang.length)];
//   },
// };
import random from '../awesome-tools/random'

const iDCardsData = [
  {
    lastName: "Doe",
    firstName: "John",
    gender: "male",
    height: 178,
    date: new Date('1992-07-14').toLocaleDateString(),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName: "Dolores",
    firstName: "Obrien",
    gender: "female",
    height: 170,
    date: new Date('1990-07-14').toLocaleDateString(),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  }
]

const drivers = [
  {
    name: "Travis Kalanick",
    rating: 4.2,
    img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
    car: {
      model: "Toyota Corolla Altis",
      licensePlate: "CO42DE"
    }
  },
  {
    name: "Dara khosrowsahi",
    rating: 4.9,
    img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
    car: {
      model: "Audi A3",
      licensePlate: "BE33ER"
    }
  }
]

const creditCardData = [
  {
    type: "/img/master-card.svg",
    number: '1234567890101995',
    expirationMonth: random.num(13),
    expirationYear: 2021,
    bank: "N26",
    owner: "John Doe",
    bgColor: `rgb(${random.color()},${random.color()},${random.color()})`,
    color: 'white'
  },
  {
    type: "/img/visa.png",
    number: '1239638170104995',
    expirationMonth: random.num(13),
    expirationYear: 2025,
    bank: "BNP",
    owner: "Waskaman Doe",
    bgColor: `rgb(${random.color()},${random.color()},${random.color()})`,
    color: 'red'
  }
]

const carouselImgs = [
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg'
]

export  {iDCardsData, drivers, creditCardData, carouselImgs }
