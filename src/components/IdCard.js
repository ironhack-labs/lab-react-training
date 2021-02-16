import React from 'react';
const styles = {
    display: 'inline-block',
    margin: 20,
    textAlign: "left"
}
const border ={
    display: 'inline-block',
    border :"1px solid black",
    alignContent: "center",
    margin: 10,
    padding: 10,
}
function IdCard({lastName, firstName, gender, height, birth, picture}){
				return <div style={border}>
                    <img alt="pic" src={picture} />
                    <div style={styles}>
					<p>First name: {firstName}<br/>
                    last name: {lastName}<br/>
					Gender: {gender}<br/>
                    Height: {height}<br/>
                    Birth: {birth}</p>
                </div>
				</div>
			}
export default IdCard