var express = require('express');
var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(process.argv.includes("delayresponse")) {
        setTimeout(function(){
            next();
        }, 2000);
    } else {
        next();
    }
});

app.get('/tickets/urgent', function (req, res) {
    res.json({
        min: 0,
        max: 24,
        value: Math.floor(Math.random() * 5)
    })
});

app.get('/tickets/progression', function (req, res) {
    let labels = ["Working Hours", "held Hours"];
    let colors = ["#22f29f", "#f5e42f"];
    let values = [];

    labels.forEach((label, index) => {
        let data = [];
        for(let i = 0; i < 7; i++) {
            data.push(Math.floor(Math.random() * 10) + i);
        }

        values.push({
            label,
            data,
            color: colors[index]
        });
    });

    res.json(values);
});
app.get('/tickets/open', function (req, res) {
    res.json({
        value: Math.floor(Math.random() * 10) + 40
    })
});

app.get('/tickets/*', function (req, res) {
    res.json({
        value: Math.floor(Math.random() * 10) + 1
    })
});



app.get('/stats/top', function (req, res) {
    res.json([
        {
            label: "Gilbert Renovation Project",
            value: Math.floor(Math.random() * 5) + 26
        },
        {
            label: "Online Tower",
            value: Math.floor(Math.random() * 5) + 13
        },
        {
            label: "McDowell Bank of America center",
            value: Math.floor(Math.random() * 5) + 18
        },
        {
            label: "Advanced Center in Nevada",
            value: Math.floor(Math.random() * 5) + 19
        },
        {
            label: "Renaissance Hotel lobby",
            value: Math.floor(Math.random() * 5) + 4
        },
        {
            label: "Phoenix Sky Harbor Airport Renovation",
            value: Math.floor(Math.random() * 5) + 12
        },
        {
            label: "United Remodel",
            value: Math.floor(Math.random() * 5) + 18
        },
        {
            label: "Gensler Phoenix Office",
            value: Math.floor(Math.random() * 5) + 7
        }
    ]);    
});

app.get('/stats/*', function (req, res) {
    res.json({
        min: 0,
        max: 100,
        value: Math.floor(Math.random() * 25) + 50
    });
});

app.listen(4000, function () {
    console.log('Data being served from http://localhost:4000');
});