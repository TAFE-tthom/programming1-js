You are tasked with writing a function that will create a linear interpolation between two pixels. This problem is similar to week 2 tutorial problem. Your function will accept two pixel values and a number of pixel values to generate inbetween;

The function is structured like so:

```js
function colorLerp(color1, color2, colorsBetween);
```


Input to `colorLerp`.
```js
colorLerp("0x002222", "0xFFDD33", 3);
```

Using the 2 pixels specified it will generate 3 new pixels between the first and last pixel. You will need to round the difference of each channel between the larger and smaller pixel. (Edit, I have updated it so you need to round the channels not the pixels themselves).

You will find the channel (Red, Green, Blue) difference between the two pixels and divide by the number of total pixels create the new pixels.

```js
let result = colorLerp("0x002222", "0xFFDD33", 3);
/*
[
  0x002222,
  0x405126,
  0x80802a,
  0xc0af2e,
  0xffdd33
]
*/
```

Your program will need to swap the starting pixel (or smallest) out of the two that were inputted should be the first colour shown while the larger pixel should be the last pixel specified.

Example 1:
```js
let result = colorLerp("0x002222", "0xFFDD33", 3);
/*
Returned Array:
[
  0x002222,
  0x405126,
  0x80802a,
  0xc0af2e,
  0xffdd33
]
*/
```

Example 2 (Reversed):


```js
let result = colorLerp("0xFFDD33", "0x002222", 3);
/*
Returned Array:
[
  0x002222,
  0x405126,
  0x80802a,
  0xc0af2e,
  0xffdd33
]
*/
```



