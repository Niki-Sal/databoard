var express = require('express');
var app = express();


//Timer to change data
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


app.get('/tickets/*', function (req, res) {
    res.json({
        value: Math.floor(Math.random() * 10) + 1
    })
});

app.get('/stats/top', function (req, res) {
    res.json([
        {
            label: "Lauren",
            value: Math.floor(Math.random() * 5) + 26
        },
        {
            label: "Dave",
            value: Math.floor(Math.random() * 5) + 13
        },
        {
            label: "John",
            value: Math.floor(Math.random() * 5) + 18
        },
        {
            label: "Gregg",
            value: Math.floor(Math.random() * 5) + 19
        },
        {
            label: "Matt",
            value: Math.floor(Math.random() * 5) + 4
        },
        {
            label: "Jaral",
            value: Math.floor(Math.random() * 5) + 12
        },
        {
            label: "Bridget",
            value: Math.floor(Math.random() * 5) + 18
        },
        {
            label: "Rob",
            value: Math.floor(Math.random() * 5) + 7
        }
    ]);    
});

app.listen(4000, function () {
    console.log('Data being served from http://localhost:4000');
});