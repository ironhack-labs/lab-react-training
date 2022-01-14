

const date = new Date("1992-07-14")

for (const property in date){
  console.log(`${property} : ${date[property]}`)
}