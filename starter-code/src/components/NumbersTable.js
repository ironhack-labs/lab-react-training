import React, { Component } from "react";

class NumbersTable extends Component {
  numTable = () => {
    this.res = [];
    for (let i = 1; i <= this.props.limit; i++) {
      let squareColor = i % 2 === 0 ? "red" : "white";
      this.res.push(
        <div style={{ backgroundColor: squareColor }} key={i}>
          <p>{i}</p>
        </div>
      );
    }
    return this.res;
  };
  render() {
    return (
      <div className="numberTable">{this.numTable()}</div>

      //

      // for every movies
      // {this.state.movies.map(movie => {
      //   return (
      //     <div key={movie.id}>
      //       <h2>{movie.title}</h2>
      //       <p>{movie.director}</p>
      //       <p>{movie.rate}</p>
      //       {movie.hasOscars ? (<p>This movie has an Oscar</p>) : (<p>No Oscar for this movie...</p>)}
      //  ===  MUITO IMPORTANTE como fazer condição apenas se for true, não opção para falso
      //       {movie.rate > 9 && <p>{movie.rate}</p>}
      //     </div>
      //   )
      // })}

      // movies
    );
  }
}

export default NumbersTable;
