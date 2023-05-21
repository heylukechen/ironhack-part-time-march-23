const directions = [
    "Starting point: Ironhack Madrid",
    "➔ Turn right toward P. de la Chopera",
    "← At the roundabout, take the 1st exit onto P. de la Chopera",
    "* Lune Creperie P. de la Chopera 33, Madrid"
  ];
   
   
  function obtainDirections(step) {
    return new Promise (function (resolve, reject) {
      // setTimeout(() => {
        // console.log( directions[step] );
   
        if (!directions[step]) reject("Instructions not found.")
        else resolve(directions[step]);
      // }, 2000); 
      
    })
  };
   
   
  obtainDirections(0) // whatever the returned value
    .then((firstResult) => {
        console.log('firstResult',firstResult)
        return obtainDirections(1)
    } )
    .then((secondResult) => {
        console.log('secondResult',secondResult)
        return obtainDirections(2) 
    })
    .then(() => obtainDirections(3) )
    // .then(() => console.log("You arrived at your destination!") )
    .catch((err) => console.log(err));