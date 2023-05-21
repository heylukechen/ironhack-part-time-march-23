const port = 3000;
const express = require("express"); // loads the express package
const hbs = require("hbs"); // this loads the hbs package
const app = express(); // this creates an express server and assigns it to "app"
const path = require("path");
 
app.set("view engine", "hbs"); // configuring our express server to use handlebars as its view engine
app.set("views", path.join(__dirname, "views")); // configuring our express server to use the views' folder as the source folder for views
app.use(express.static(path.join(__dirname, "public"))); // configuring express server to use the 'public' folder as the source of all static files
hbs.registerPartials(__dirname + "/views/partials"); // configures our express server to use the partials folder with handlebars 

app.get("/", (req, res, next) => res.render("index"));
 
app.get("/players", (req, res, next) => {
    const players = [
        {
          name: "Rusell",
          lastName: "Westbrook",
          team: "OKC",
          photo: "https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg",
          average: [
            { year: 2013, points: 82 },
            { year: 2014, points: 82 },
            { year: 2015, points: 60 },
            { year: 2016, points: 46 },
            { year: 2017, points: 67 },
            { year: 2018, points: 80 }
          ]
        },
        {
          name: "Kevin",
          lastName: "Durant",
          team: "GSW",
          photo: "https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
          average: [
            { year: 2013, points: 76 },
            { year: 2014, points: 80 },
            { year: 2015, points: 65 },
            { year: 2016, points: 50 },
            { year: 2017, points: 67 },
            { year: 2018, points: 78 }
          ]
        },
        {
          name: "Lebron",
          lastName: "James",
          team: "CLE",
          photo: "https://lalweb.blob.core.windows.net/public/lakers/product-marketing/web/player-page/2022-2023/2223_PlayerImage_James_1920x2304.jpg",
          average: [
            { year: 2013, points: 78 },
            { year: 2014, points: 82 },
            { year: 2015, points: 76 },
            { year: 2016, points: 84 },
            { year: 2017, points: 67 },
            { year: 2018, points: 60 }
          ]
        },
        {
          name: "Emanuel",
          lastName: "Ginóbilli",
          team: "SAS",
          photo: "https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg",
          average: [
            { year: 2013, points: 82 },
            { year: 2014, points: 76 },
            { year: 2015, points: 74 },
            { year: 2016, points: 80 },
            { year: 2017, points: 66 },
            { year: 2018, points: 63 }
          ]
        },
        {
          name: "Kyrie",
          lastName: "Irving",
          team: "BOS",
          photo: "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/11/11/kyrie-irving-mvp-case.jpg?itok=PWYqUSGf",
          average: [
            { year: 2013, points: 74 },
            { year: 2014, points: 72 },
            { year: 2015, points: 66 },
            { year: 2016, points: 82 },
            { year: 2017, points: 64 },
            { year: 2018, points: 61 }
          ]
        }
      ];
     
      res.render("players", { players: players });
});
 
app.get("/teams", (req, res, next) => res.render("teams"));

// app.get("*", (req, res, next) => res.render("404"));
 
app.listen(port, () => console.log(`App is running on port ${port}`));