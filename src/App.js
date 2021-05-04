import React from 'react';
import './App.css';

// Imported Components
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";


function App() {
	return (
		<div style={{padding: "10px"}}>
			<h1>Iteration 1 – Id Card</h1>
				<div class="id">
					<IdCard 
						picture="https://randomuser.me/api/portraits/men/44.jpg" 
						firstName="John"
						lastName="Doe"
						gender="Male"
						height={(178).toString()}
						birth={new Date("1992-07-14").toLocaleDateString()} />	
				</div>
				<div class="id">
					<IdCard
						picture="https://randomuser.me/api/portraits/women/44.jpg"
						firstName="Delores"
						lastName="Obrien"
						gender="female"
						height={(172).toString()}
						birth={new Date("1988-05-11").toLocaleDateString()} />
				</div>

			<h1>Iteration 2 – Greetings</h1>
				<div class="greeting">
					<Greetings lang="de" name="Ludwig" />
				</div>
				<div class="greeting">
					<Greetings lang="fr" name="François" />
				</div>
			
			<h1>Iteration 3 – Random</h1>
				<div class="random">
					<Random min={1} max={6} />
				</div>
				<div class="random">
					<Random min={1} max={100} />
				</div>

			<h1>Iteration 4 – Box Color</h1>
				<div class="box">
					<BoxColor r={255} g={0} b={0} />
				</div>
				<div class="box">
					<BoxColor r={128} g={255} b={0} />
				</div>

			<h1>Iteration 5 – Credit Card</h1>
				<div class="card">
					<CreditCard
						type="Visa"
						number="0123456789018845"
						expirationMonth={3}
						expirationYear={2021}
						bank="BNP"
						owner="Maxence Bouret"
						bgColor="#11aa99"
						color="white" />
				</div>
				<div class="card">
					<CreditCard
						type="Master Card"
						number="0123456789010995"
						expirationMonth={3}
						expirationYear={2021}
						bank="N26"
						owner="Maxence Bouret"
						bgColor="#eeeeee"
						color="#222222" />
				</div>
				<div class="card">
					<CreditCard
						type="Visa"
						number="0123456789016984"
						expirationMonth={12}
						expirationYear={2019}
						bank="Name of the Bank"
						owner="Firstname Lastname"
						bgColor="#ddbb55"
						color="white" />
				</div>

			<h1>Iteration 6 – Rating</h1>
				<div class="rating">
					<Rating></Rating>
				</div>
				<div class="rating">
					<Rating></Rating>
				</div>
				<div class="rating">
					<Rating></Rating>
				</div>
				<div class="rating">
					<Rating></Rating>	
				</div>
				<div class="rating">
					<Rating></Rating>	
				</div>
				<div class="rating">
					<Rating></Rating>	
				</div>

			<h1>Iteration 7 – Driver Card</h1>
				<div class="driver">
				<DriverCard
  					name="Travis Kalanick"
  					rating={4.2}
  					img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  					car={{
    					model: "Toyota Corolla Altis",
    					licensePlate: "CO42DE"
  					}} />
				</div>
				<div class="driver">
				<DriverCard
  					name="Dara Khosrowshahi"
  					rating={4.9}
  					img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  					car={{
    					model: "Audi A3",
    					licensePlate: "BE33ER"
  					}} />
				</div>
			<h1>Iteration 8 – Like Button</h1>
			<h1>Iteration 9 – Clickable Picture</h1>
			<h1>Iteration 10 – Dice</h1>
			<h1>Iteration 11 – Carousel</h1>
			<h1>Iteration 12 – Numbers Table</h1>
			<h1>Iteration 13 – List and Keys - Facebook (Simple)</h1>
			<h1>Iteration 14 – List and Keys - Facebook (Advanced)</h1>
			<h1>Iteration 15 – Form - Sign Up Page</h1>
			<h1>Iteration 16 – Lifting State Up – RGB Color Picker</h1>
		</div>
	)
}

export default App;
