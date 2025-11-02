
const weatherConditions = require('./weather.js');

function procTest({ prefix, temperature, humidity, expected }) {

  const name = `${prefix}, ${temperature},${humidity}`;

  test(name, function() {

    const testTemp = temperature;
    const testHumid = humidity;
    const testExpected = expected;

    const result = weatherConditions(testTemp, testHumid);
    
    expect(result).toEqual(testExpected);
    
  })
  
}


procTest({
  prefix: "very cold and wet",
  temperature: -6,
  humidity: 80,
  expected: "It is very cold and the air is very damp" 
});

procTest({
  prefix: "quite cold and wet",
  temperature: 6,
  humidity: 75,
  expected: "It is quite cold and the air is very damp" 
});

procTest({
  prefix: "very hot and dry",
  temperature: 46,
  humidity: 10,
  expected: "It is very hot and the air is dry" 
});

procTest({
  prefix: "warm and normal",
  temperature: 16,
  humidity: 40,
  expected: "It is warm and the air is normal" 
});

procTest({
  prefix: "quite warm and normal",
  temperature: 21,
  humidity: 40,
  expected: "It is quite warm and the air is normal" 
});

procTest({
  prefix: "hot and dry",
  temperature: 30,
  humidity: 20,
  expected: "It is hot and the air is dry" 
});

procTest({
  prefix: "Bad values 1",
  temperature: -101,
  humidity: 91,
  expected: "Unable to provide conditions for temperature" 
});

procTest({
  prefix: "Bad values 2",
  temperature: 9,
  humidity: 105,
  expected: "Unable to provide conditions for humidity" 
});

procTest({
  prefix: "Bad values 3",
  temperature: -101,
  humidity: -7,
  expected: "Unable to provide information on weather conditions" 
});
