const path = require("path")
const express = require('express')
const compression = require('compression')
const app = express();
const port = process.env.PORT || 8080

app.use(compression());

app.use(express.static(path.resolve(__dirname)));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.use((req, res, next) => {
    if (req.url.includes("/admin")) {
        res.sendFile(path.resolve(__dirname, "dashboard.html"));
    } else {
        res.sendFile(path.resolve(__dirname, "index.html"));
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
