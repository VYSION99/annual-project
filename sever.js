const { engine} = require("express-handlebars");
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");



// load config data
dotenv.config({ path: "./config/Data.env" });

//declearing port
var port = process.env.Port || 2000 ;

const app = express();
app.use( express.json());
app.use(express.urlencoded({ extended:true}));

// static folder
app.use(express.static(path.join(__dirname, "Math Sci Quiz")));
app.use(require("./Route/Route"));

app.engine(".hbs", engine({extname:'.hbs', defaultLayout:'main'}));
app.set("view engine", ".hbs");
app.set('views', './views');




app.get('/', (req,res) => {
    res.render('home')
})






app.listen(port, () => {
    console.log(`server running on port :: ${port}`)
})