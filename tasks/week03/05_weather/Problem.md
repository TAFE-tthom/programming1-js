
# Weather Conditions

You have been tasked with implementing the function `weatherConditions` that will return a description of the weather conditions based on the arguments given.

You will need to modify `weatherConditions` function in the `weather.js` file to complete the implementation.

The function will have two paramters:

* `temperature` which is a floating point value between -100 and 100

* `humidity` which is a floating point value between 0 and 100, this represent the amount of moisture in the air as a percentage (%).

The function will return a string that has two components:
`{temperature_output} {humidity_output}`.

Note the points below as part of the logic behind `temperature_output` and `humidity_output`.

```js
function weatherConditions(temperature, humidity)
```

To implement `weatherConditions`, you will need to implement the following points to complete the function. 

1. If the `temperature` and `humidity` are both valid values (take note of the first and second paragraphs). The function can do the following:

  * For `temperature`:

    * If the `temperature`, is less than or including -5, the first part of the output should return:
     `'It is very cold'`

    * If the `temperature`, is between -4 and 8, the first part of the output should return:
     `'It is quite cold'`

    * If the `temperature`, is between 9 and 18, the first part of the output should return:
     `'It is warm'`
     
    * If the `temperature`, is between 19 and 25, the first part of the output should return:
     `'It is quite warm'`
     
    * If the `temperature`, is between 26 and 34, the first part of the output should return:
     `'It is hot'`

    * If the `temperature`, is greater than 35, the first part of the output should return:
     `'It very hot!'`


  * For `humidity`, the output is meant to be appended to the end of the string.

    * If the `humidity` is between 0 and 20, the should that forms the second part of the output should be:
    `"and the air is dry"`.
    
    * If the `humidity` is between 21 and 60, the should that forms the second part of the output should be:
    `"and air is normal"`.
    
    * If the `humidity` is between 61 and 100, the should that forms the second part of the output should be:
    `"and the air is very damp"`.
  
  

2. If `temperature` is an invalid value, the function should return `'Unable to provide conditions for temperature'`.

3. If `humidity` is an invalid value, the function should return `'Unable to provide conditions for humidity'`.

4. If `temperature` and `humidity` are both invalid values, the function should return `'Unable to provide information on weather conditions'`.


## How to test

To test your program, you will need to run `npm test`, make sure you install the required dependencies for this task using `npm install`.
