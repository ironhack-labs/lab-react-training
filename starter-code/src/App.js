import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import IdDisplay from "./components/idcard/IdDisplay";
import GreetingsDisplay from "./components/greetings/GreetingsDisplay";
import RandomDisplay from "./components/random/RandomDIsplay";
import BoxColorDisplay from "./components/boxcolor/BoxColorDIsplay";
import CreditCardsDisplay from "./components/credit-cards/CreditCardsDisplay";
import Rating from "./components/ratings/Ratings";
import DriverCardData from "./components/DriverCard/DriverCardData";
import LikeButton from "./components/likebutton/LikeButton";
import ClickeablePicture from "./components/clickeablePicture/ClickeablePicture";
import Dice from "./components/dice/Dice";
import Carousel from "./components/carousel/Carousel";
import NumbersTable from "./components/numbersTable/NumbersTable";
import Facebook from "./components/Facebook/Facebook";
import profiles from './data/berlin.json'


class App extends Component {
	render() {
		return (
			<div className="App">
				<IdDisplay />
				<GreetingsDisplay />
				<RandomDisplay />
				<BoxColorDisplay />
				<h1>Credit cards</h1>
				<div className="d-flex container">
					<div className="row">
						<CreditCardsDisplay />
					</div>
				</div>
				<h1>Ratings</h1>
				<Rating>0</Rating>
				<Rating>1.49</Rating>
				<Rating>1.5</Rating>
				<Rating>3</Rating>
				<Rating>4</Rating>
				<Rating>5</Rating>
				<DriverCardData />
				<h1>Like Buttons</h1>
				<LikeButton />
				<LikeButton />
				<h1>Clickeable picture</h1>
				<ClickeablePicture
					img="/img/persons/maxence.png"
					imgClicked="/img/persons/maxence-glasses.png"
				/>
				<h1>Dice</h1>
				<Dice />

				<h1>Carousel</h1>
				<Carousel
					imgs={[
						"https://randomuser.me/api/portraits/women/1.jpg",
						"https://randomuser.me/api/portraits/men/1.jpg",
						"https://randomuser.me/api/portraits/women/2.jpg",
						"https://randomuser.me/api/portraits/men/2.jpg",
					]}
				/>
				<h1>Numbers Table</h1>

				<NumbersTable limit={12} />

				<h1>Facebook</h1>

				<Facebook profiles={profiles} />
			</div>
		);
	}
}

export default App;
