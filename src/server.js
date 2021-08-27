import  express from "express";
import  viewEngine from "./config/viewEngine";
import  initWebRoute from "./routes/web";
import  bodyParser from "body-parser";
require("dotenv").config();

let app = express();

//config view engine
viewEngine(app);


//parse request to json
app.use(bodyParser.json());
app.use (bodyParser.urlencoded({extended: true}));

//init web route
initWebRoute(app);

let port = process.env.PORT || 8181;
app.listen(port,() => {
    console.log("Chatbot dang chay o cong: "+port);

}); 