var express = require('express');
var app = express();

app.use(express.static('.'));

app.listen(process.env.PORT || 3000, function () {
  console.log('Mathtab running');
});
