function IdCard(props) {
	return (
		<div class="App">
			<div class="IdCard box">
				<img src={props.picture} alt="profile pic" />
				<br />
				<div class="right">
					<b>First Name</b>: {props.firstName}
					<br />
					<b>Last Name</b>: {props.lastName}
					<br />
					<b>Gender</b>: {props.gender}
					<br />
					<b>Height</b>: {props.height}
					<br />
					<b>Birth</b>: {props.birth.toDateString()}
					<br />
				</div>
			</div>
		</div>
	);
}

export default IdCard;
