import React, { Component } from 'react';

class NumbersTable extends Component {

    getStars(rating) {
        const stars = Math.round(rating);
        let starsString = '';

        for (let index = 0; index < 5; index++) {
            if (index < stars) {
                starsString += '★';
            } else {
                starsString += '☆';
            }
        }

        return starsString;
    }

    render({limit}=this.props) {

        let html = ''

        for (let index = 1; index <= limit; index++) {
            html += `<p ${index%2 == 0 ? 'style="background-color: red"' : ''}>${index}</p>`;
        }

        return (
            <div className='numbersCont' dangerouslySetInnerHTML={{__html: html}}/>
        )

    }

}

export default NumbersTable;