function Random(min, max) {
    let value = Math.floor((Math.random() * (max-min)) + min)
  
    return <div>Random value between {min} and {max} => {value}</div>
  }