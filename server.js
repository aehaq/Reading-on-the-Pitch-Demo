const EXPRESS = require("express");
const ROUTES = require("./routes");

const DB = require("./models")

const APP = EXPRESS();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
    APP.use(EXPRESS.static("client/build"));
}

// DB.sequelize.sync().then(function() {
//     APP.listen(PORT, function() {
//         console.log(`listening on port ${PORT}`);
//     })
// })

APP.use(EXPRESS.urlencoded({ extended:true}));
APP.use(EXPRESS.json());

APP.use(EXPRESS.static("../client/public"));

// APP.use(ROUTES);