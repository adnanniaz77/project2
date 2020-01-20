const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/apiRoutes"));

app.use(express.static("./views/"));
app.use("/", require("./routes/clientRoutes"));

const db = require("./models");
db.sequelize.sync().then(() => {
    app.listen(PORT, () =>
        console.log(`Listening on http://localhost:${PORT}`)
    );
});
