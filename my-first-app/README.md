![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React Training

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Create and render components with multiple props.
  - Use props to pass data to components and display the data received through props within the components
  - Use inline styles to modify the appearance of components
  - Use operators `?` and `&&` to conditionally render content
  - Use the `useState` hook to create state variables and add state to React components.
  - Use state variable setter functions to update state and trigger component re-render.
  - Create event handler functions to handle user interactions and browser events.
  - Create controlled components to manage the form inputs.
  - Apply the "Lifting State Up" approach to share the state between components.
  - Pass functions as props from a parent component to a child component.

  <br>
  <hr> 

</details>

## Introduction

The purpose of this exercise is to practice the core React concepts such as: creating components, passing data through props, working with state, rendering lists, and working with forms (controlled components).

To see the expected result for each iteration, refer to the solution example: [**React Training - solution**](https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.com/).

## Setup

- Fork this repo
- Clone this repo

```shell
$ cd lab-react-training
$ npm install
$ npm start
```

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request so that your TAs can review your work.

  

## Instructions



### Iteration 0 | Components folder

Inside of the `src/` folder, create a new folder named `components`. 

Use the `components` folder to store all the components that you create in the following iterations.



----



### Iteration 1 | Component: `IdCard`

Create and render an `IdCard` component with 6 props:

- `lastName`: A string
- `firstName`: A string
- `gender`: A string, `'male'` or `'female'`
- `height`: A number
- `birth`: A date
- `picture`: A string

**Example:**

```jsx
<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52976030-22b0d200-33c8-11e9-91fe-e3ce0fa14078.png)



----



### Iteration 2 | Component: `Greetings`

Create a `Greetings` component with 2 props:

- `lang`: A string that can have values: `"de"`, `"en"`, `"es"` or `"fr"`
- `children`: A text

The component should display a greeting text in the chosen language.

**Example:**

```jsx
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52957158-57edfd80-3391-11e9-8726-93c1a3389016.png)



----



### Iteration 3 | Component: `Random`

Create a `Random` component with 2 props:

- `min`: A number
- `max`: A number

The component should display a random integer in the range between the `min` and the `max` number.

**Example:**

```jsx
<Random min={1} max={6}/>
<Random min={1} max={100}/>
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52957202-718f4500-3391-11e9-9b45-d1172067e877.png)



----



### Iteration 4 | Component: `BoxColor`

Create a `BoxColor` component that displays a rectangle with a background color based on props. For this, you will need to add inline styles ([documentation](https://reactjs.org/docs/dom-elements.html#style)).

The component should take 3 props:

- `r`: A number between `0` and `255` representing the amount of red
- `g`: A number between `0` and `255` representing the amount of green
- `b`: A number between `0` and `255` representing the amount of blue

**Example:**

```jsx
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52957816-ec0c9480-3392-11e9-9e00-67094fa2b431.png)

As a bonus, you can also display the hex values of the color (e.g., `#ff0000` for red).



----



### Iteration 5 | Component: `CreditCard`

Create a `CreditCard` component that displays a rectangle with the information coming from the props. 

The component should take 8 props:

- `type`: A string that can be `"Visa"` or `"Master Card"`
- `number`: A string that is the number of the credit card. For security reasons, you should only display the 4 last digits 😉
- `expirationMonth`: A number that represents the month, between 1 and 12
- `expirationYear`: A number that represents the year
- `bank`: A string that represents the name of the bank
- `owner`: A string that represents the name of the owner
- `bgColor`: A string for the background color of the card
- `color`: A string for the text color of the card

Take your time to make the component look as close to the *expected output* as possible. You'll probably want to use flexbox.

**Example:**

```jsx
<CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
/>
    
<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/>
    
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" 
/>
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52975678-ac5fa000-33c6-11e9-8cbf-7d13a8a0f625.png)



----



### Iteration 6 | Component: `Rating`

Create a `Rating` component that displays 5 stars. Depending on the value received, some stars should be empty (☆), and some should be filled (★).

The component should take 1 prop:

- `children`: A number between `0` and `5`. The value can be a floating-point number. If the number received is `3.9`, the component should display 4 stars.

**Example:**

```jsx
<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52972787-39512c00-33bc-11e9-93d8-428d835442fd.png)



----



### Iteration 7 | Component: `DriverCard`

Create a `DriverCard` component that displays a rectangle with content based on the received props. 

The component should take 4 props:

- `name`: A string
- `rating`: A number between `0` and `5`.  The value can be a floating point number.
- `img`: A string
- `car`: An object with properties `model` and `licensePlate`.

**Example**

```jsx
<DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>

<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/>
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/52972847-66054380-33bc-11e9-92e0-8e48d1ab0212.png)



----



### Iteration 8 | State: `LikeButton`

Create a `LikeButton` component that displays a button with the initial text `"0 Likes"`. With each click, the number of Likes should increase.

As a bonus, implement the background color change on each click. You can use the following array of colors: `['purple','blue','green','yellow','orange','red']`

**Example:**

```jsx
<LikeButton />
```

**Expected Output:**

![](https://media.giphy.com/media/OQJkfIEkYTUdYkgNP7/giphy.gif)



----



### Iteration 9: State: `ClickablePicture`

Create a `ClickablePicture` component that displays a picture. On each click, the picture should toggle between the two images passed through the props.

**Example:**

```jsx
<ClickablePicture
  img='maxence.png'
  imgClicked='maxence-glasses.png'
/>
```

**Expected Output:**

![](https://media.giphy.com/media/9FXwCr2LLLIlgNL2sL/giphy.gif)

PS: If you want to use your picture instead, you can create it using this picture: http://www.stickpng.com/assets/images/584999937b7d4d76317f5ffd.png 😎



----



### Iteration 10 | State: `Dice`

Create a `Dice` component that displays a picture with the random dice value (example: `'../assets/images/dice3.png'`).

Every time the user clicks on the component, it should:

- First, display an empty picture (`'../assets/images/dice-empty.png'`)
- 1 second later, display a new random picture (example: `'../assets/images/dice6.png'`).

**Example:**

```jsx
<Dice />
```

**Expected Output before the click:**

![image](https://user-images.githubusercontent.com/5306791/52976705-c13e3280-33ca-11e9-8684-f4dbff643b79.png)

**Expected Output immediately after the click:**

![image](https://user-images.githubusercontent.com/5306791/52976790-25f98d00-33cb-11e9-864e-ec14b4ec2a31.png)

**Expected Output 1 second after the click:**

![image](https://user-images.githubusercontent.com/5306791/52976752-f64a8500-33ca-11e9-98ee-b0b17f5e85b2.png)



----



### Iteration 11 | State: `Carousel`

Create a `Carousel` component that displays an image and two buttons (<kbd>Left</kbd> and <kbd>Right</kbd>), which change the picture on each click, respectively.

The component should take 1 prop:

- `images`: An array of strings. Each string should be an image URL.

**Example:**

```jsx
<Carousel
  images={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>
```

**Expected Output:**

![](https://media.giphy.com/media/1n7cAJu0MWerLnnohR/giphy.gif)



----



### Iteration 12 | List and Keys | `NumbersTable`

Create a `NumbersTable` component that displays a list of numbers between `1` and the `limit`. Even numbers must be colored in red.

The component should take 1 prop:

- `limit`: A number.

**Example:**

```jsx
<NumbersTable limit={12} />
```

**Expected Output:**

![image](https://user-images.githubusercontent.com/5306791/53028410-13349600-3467-11e9-8199-407375e61ab0.png)



----



### Iteration 13 | List and Keys - `FaceBook` (Simple)

Create a `FaceBook` component that displays the list of all profiles coming from the file `src/data/berlin.json`. Remember to import the json data in the component:

```jsx
import profiles from './data/berlin.json';
```

**Example:**

```jsx
<FaceBook />
```

**Expected Output:** (you should see about 28 profiles)

![image](https://user-images.githubusercontent.com/5306791/53018529-e8d8dd80-3452-11e9-9912-1221eef67be6.png)



----



### Iteration 14 | List and Keys - `FaceBook` (Advanced)

Update your `FaceBook` component and add a button for each country the students come from; Each student object has a `country` property. When the user clicks on the button with the country name (example: <kbd>USA</kbd>), add a blue background to all the profiles where the `country` is the one selected.

**Example:**

```jsx
<FaceBook />
```

**Expected Output:** (note: part of the content in the screenshot was cropped)

![image](https://user-images.githubusercontent.com/5306791/53018961-f8a4f180-3453-11e9-9c82-1f57a2f66a30.png)

**Bonus:**

- By default, only display the picture. Then, when a user clicks on a picture, display more information
- Add sort buttons
- Add a search input



----



### Iteration 15 | Form - `SignupPage`

Create a `SignupPage` component with the following elements:

- An `input` of type `"email"` (bonus: make the input green/red when the email is valid/invalid)

- An `input` of type `"password"` (bonus: make the input green/red when the password is strong/weak)

- A `select` input, used for selecting a nationality, with possible options/values: `"en"`, `"de"`, `"fr"`

- A paragraph displaying `"Hello"`, `"Hallo"` or `"Bonjour"` based on the selected nationality

- A text "Your email is john@doe.com"

  

For this, you will need 3 state variables:

- `email`
- `password`
- `nationality`

If you want to include Bootstrap with [Reactstrap](https://reactstrap.github.io), you should run

```sh
npm install reactstrap bootstrap
```

And add the following line in `src/index.js`

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

**Example**

```jsx
<SignupPage />
```

**Output**

![image](https://user-images.githubusercontent.com/5306791/53089348-9c51d880-350c-11e9-9621-cad9d87bdd48.png)



----



### Iteration 16 | Lifting State Up - `RGBColorPicker`

Create 2 components:

- The `RGBColorPicker` component, that displays a square with an rgb color coming from the state.
  The component should have the following state variables:

  - `rValue`: A number between `0` and `255`, representing the amount of red

  - `gValue`: A number between `0` and `255`, representing the amount of green

  - `bValue`: A number between `0` and `255`, representing the amount of blue

    

- The `SingleColorPicker` component should have an input field of type `"number"`, and allow the user to select a number between `0` and `255`. 

  The component should take 3 props:

  - `color`: A string that is either `"r"`, `"g"` or `"b"`
  - `value`: A number between `0` and `255`
  - `onChange`: A method that is triggered when the input is changed



The `RGBColorPicker` should render 3 `SingleColorPicker` components and send the state values to them.

**Example:**

```jsx
<SingleColorPicker 
  color="r"
  value={rValue}
  onChange={ () => { /* ... */ }  }
/>

<SingleColorPicker 
  color="g"
  value={gValue}
  onChange={ () => { /* ... */ }  }
/>

<SingleColorPicker 
  color="b"
  value={bValue}
  onChange={ () => { /* ... */ }  }
/>
```



**Expected Output**

![image](https://user-images.githubusercontent.com/5306791/53166207-f918c600-35d4-11e9-8c47-c58cdc2d05b0.png)



**Happy coding!** :heart:
