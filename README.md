# React Monday Training | React Components

## Introduction

The goal of this repository is to create a lot of React components.

To start this project, you can:
- Clone this project
- Run `npm install`
- Run `npm start`

## `Greetings`

Create a `Greetings` component with 2 props:
- `lang`: A string that could be ,`"de"`,`"en"`,`"es"`,`"fr"`
- `children`: A text 

**Example**
```js
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
```

**Output**

![image](https://user-images.githubusercontent.com/5306791/52957158-57edfd80-3391-11e9-8726-93c1a3389016.png)


## `Random`

Create a `Random` component with 2 props:
- `min`: A number
- `max`: A number

**Example**
```js
<Random min={1} max={6}/>
<Random min={1} max={100}/>
```

**Output**

![image](https://user-images.githubusercontent.com/5306791/52957202-718f4500-3391-11e9-9b45-d1172067e877.png)



## `BoxColor`

Create a `BoxColor` component that displays a rectangle with a background color based on props. For this, you will need a inline style ([documentation](https://reactjs.org/docs/dom-elements.html#style)). 

It takes 3 props:
- `r`: A number between 0 and 255 representing the amount of red
- `g`: A number between 0 and 255 representing the amount of green
- `b`: A number between 0 and 255 representing the amount of blue

**Example**
```js
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
```

**Output**

![image](https://user-images.githubusercontent.com/5306791/52957816-ec0c9480-3392-11e9-9e00-67094fa2b431.png)


As a bonus, you can also display the hex values of the color (ex: `#ff0000` for red).

## `CreditCard`

Create a `CreditCard` component that displays a square with a background color based on props. For this. You will need a styled component. 

It takes 8 props:
- `type`: A string that can be `"Visa"` or `"Master Card"`
- `number`: A string that is number of the credit card. You will only display the 4 last digits for security reasons 😉
- `expirationMonth`: A number that represents the month, between 1 and 12
- `expirationYear`: A number that represents the year
- `bank`: A string that represents the name of the bank
- `owner`: A string the reprensents the name of the owner
- `bgColor`: A string for the background color of the card
- `color`: A string for the text color of the card

Take your time to do as close to the output. You probably have to use flexbox.

**Example**
```js
<CreditCard type="Visa" number="0123456789016984" expirationMonth={12} expirationYear={2019} bank="Name of the Bank" owner="Firstname Lastname" bgColor="#eecc55" color="white" />
```

**Output**

![](https://trello-attachments.s3.amazonaws.com/5c05678a9f27127996f56d38/5c69daff8b89794b0772c527/26255e6386a63397b41cfea6fd8016c7/image.png)


## `Rating`

Create a `Rating` component that displays

It takes 1 props:
- `children`: A float number between 0 and 5

For this, you will need to install Font Awesome
```sh
npm i @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons
```