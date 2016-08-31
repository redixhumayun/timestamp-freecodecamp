var express = require('express');

var app = express();
var date_obj = {};

app.get('/:date', function(req, res){
   var date = req.params.date;
   
  if(!isNaN(Date.parse(date))){
      date_obj = {'natural': date, 'unix': Date.parse(date)};
  }else{
      var nat_date = convert(parseInt(date*1000));
      date_obj = {'natural': nat_date, 'unix': parseInt(date)};
  }
  res.send(date_obj);
});

function convert(date){
    return new Date(date).toDateString();
}

app.listen(8080, function(){
   console.log('Express listening on port 8080!'); 
});