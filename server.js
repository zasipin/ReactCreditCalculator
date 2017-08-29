var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  const appUrls = ['/consumer', '/mortage', '/car']
  if(appUrls.findIndex((val) => { return req.url === val; }) >= 0)
    res.redirect('http://' + req.hostname + ':' + PORT + '/');
  else
    next();
});

app.use(function (req, res, next){
    if (req.headers['x-forwarded-proto'] === 'https') {
      res.redirect('http://' + req.hostname + req.url);
    } else {
      next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
