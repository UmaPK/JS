var fs = require("fs");
var jsonObj = [];
// var jf = require("jsonfile");
// Asynchronous read
fs.readFile('Indicators.csv', function (err, data) {
   if (err) {
       return console.error(err);
   }

  bufferString=data.toString();
  arr = bufferString.split('\n');
  var headers = arr[0].split(',');
  headers[headers.length-1]=headers[headers.length-1].trim();
  for(var i = 1; i <arr.length-1; i++)
  {
    var data1 = arr[i].split(',');
    var obj = {};
    for(var j = 0; j <data1.length; j++)
    {
           obj[headers[j]] = data1[j].trim();
    }
     if(obj.CountryCode=="IND")
     if((obj.IndicatorName=="Urban population (% of total)")||(obj.IndicatorName=="Rural population"))
       jsonObj.push(obj);
  }
  JSON.stringify(jsonObj);
  console.log(jsonObj);
  obj=JSON.stringify(jsonObj);
  fs.writeFile('my.json',obj);
});
