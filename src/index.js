
let SolarCalc = require('solar-calc');
 
// SolarCalc(date,lat,long)
let solar = new SolarCalc(new Date('Mar 8 2015'),35.78,-78.649999);
 
solar.sunrise // 2015-03-08T11:35:30.000Z

console.log('hola mi negro', solar.sunrise)
