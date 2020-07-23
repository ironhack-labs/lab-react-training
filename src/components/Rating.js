import React from 'react'

export default function Rating(props) {

    const number = props.children;

    return (
        <div >
        {number >= 0.5 ? '★' : '☆'}
        {number >= 1.5 ? '★' : '☆'}
        {number >= 2.5 ? '★' : '☆'}
        {number >= 3.5 ? '★' : '☆'}
        {number >= 4.5 ? '★' : '☆'}
      </div>
    )
}
