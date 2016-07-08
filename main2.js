var fs = require("fs");
var data = fs.readFileSync('Indicators.csv');
var stringData=data.toString();
var arrayOne= stringData.split('\r\n');
var header=arrayOne[0].split(',');
var cnt_countryname,cnt_indicatorname,cnt_year,cnt_value;
cnt_countryname = header.indexOf('CountryName');
cnt_indicatorname = header.indexOf('IndicatorName');
cnt_year = header.indexOf('Year');
cnt_value = header.indexOf('Value');
var noOfRow = arrayOne.length;
var noOfCol = header.length;
var jArray=[];
var final_obj={};
var i=0,j=0;
for (i = 1; i < noOfRow-1; i++)
{
  for (j = 0; j< noOfCol; j++)
  {
      var myNewLine=arrayOne[i].split(',');
  };
  if((myNewLine[cnt_countryname] == 'India') && (myNewLine[cnt_indicatorname] == 'Urban population (% of total)' || myNewLine[cnt_indicatorname] == 'Rural population (% of total)'))
  {
    final_obj[header[cnt_value]]=myNewLine[cnt_value];
    final_obj[header[cnt_year]]=myNewLine[cnt_year];
    jArray.push(final_obj);
  }
  final_obj={};
};
console.log( jArray);
//Write
var file = 'India.json';
var obj = JSON.stringify(jArray);
fs.writeFileSync(file, obj);



//Asia
var jArray=[];
var final_obj={};
var i=0,j=0;
for (i = 1; i < noOfRow-1; i++)
{
  for (j = 0; j< noOfCol; j++)
  {
      var myNewLine=arrayOne[i].split(',');
  };
  if((myNewLine[cnt_countryname] == 'Arab World' || myNewLine[cnt_countryname] == 'East Asia & Pacific (all income levels)' || myNewLine[cnt_countryname] == 'East Asia & Pacific (developing only)' || myNewLine[cnt_countryname] == '') && (myNewLine[cnt_indicatorname] == 'Urban population (% of total)' || myNewLine[cnt_indicatorname] == 'Rural population (% of total population)'))
  {
   final_obj[header[cnt_countryname]]=myNewLine[cnt_countryname];
   final_obj[header[cnt_indicatorname]]=myNewLine[cnt_indicatorname];
   final_obj[header[cnt_year]]=myNewLine[cnt_year];
   jArray.push(final_obj);
  }
  final_obj={};
};
console.log( jArray);

//Write
var file = 'India1.json';
// console.log("Printignn final object",);
var obj = JSON.stringify(jArray);
fs.writeFileSync(file, obj);
