require("dotenv").config(); // Loads the values from .env file to process.env

const hbs = require("hbs"); // Views
const path = require("path"); // joins two directories or files
const axios = require("axios"); // make calls to external APIs
const morgan = require("morgan"); // logger, show on the terminal which route was recently called
const express = require("express"); // used to make express server + application
const app = express();


hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // get form data from the client to the server

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/searchResults", (req, res) => {
// Step 1: get the movie name via the req.query
// Step 2: Send an api request to the OMDB API, pass the API key and the movie name 
// Step 3: Extract 'Search' and 'totalResults' from the API Response
// Step 4: Display to the user the 'Search' and 'totalResults' on the 'search-results.hbs' page

  // req.query --> Query String
  console.log('req.query',req.query)
  const { title } = req.query; // --> const title = req.query.title
  const lowercaseTitle = title.toLowerCase();

  axios
    .get(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_Key}&s=${lowercaseTitle}&page=1-2`
    )
    .then((OMDBResponse) => {
      const { Search, totalResults } = OMDBResponse.data; // creating two variables based off the properties from OMDBResponse.data 
      console.log(OMDBResponse.data)

      res.render("search-results", { movieName: title, Search, totalResults });
    })
    .catch((error) => console.log(error));
});

app.get("/:movieId", (req, res) => {
  console.log(req.params);
  const { movieId } = req.params;

  axios
    .get(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_Key}&i=${movieId}`
    )
    .then((OMDBMovie) => {
      console.log(OMDBMovie.data);
      const movie = OMDBMovie.data;

      res.render("movie", { movie });
    })
    .catch((error) => console.log(error));
});

app.post("/searchResults", (req, res) => {
  const { movieName } = req.body;
    console.log('req body', req.body);
    
    axios
    .get(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_Key}&s=${movieName}&page=10`
    )
    .then((OMDBResponse) => {
      console.log('OMDBResponseData', OMDBResponse.data)
      const { Search, totalResults } = OMDBResponse.data;

      res.render("search-results", { movieName, Search, totalResults });
    })
    .catch((error) => console.log(error));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running ${process.env.PORT}`);
});
