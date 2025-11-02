## Part 1.

You are to create a class that will store a pair of 2D coordinates. These coordinates are stored as doubles and will denote a point on a 2D plane.

Your Point2D objects must have the following public getter methods:

* Constructor that accepts 2 double values (x, y)
* getX() : double
* getY() : double
* getCoords(): double[] (x at index 0 and y at index 1)

## Part 2.

Implement the static method  that will allow you to find a point between two given points. Implement this method to accept two Point2D objects and return a Point2D object. To calculate a point, you can use the following formula:

$x = a_x + ((b_x - a_x) * d)$
$y = a_y + ((b_y - a_y) * d)$
$P = Point2D(x, y)$


Example 1:
```
let a = new Point2D(2.0, 3.5);
let b = new Point2D(1.0, 3.5);
let p = Line.findPoint(a, b, 0.5); //returns a Point2D with x=1.5, y=3.5
```

Example 2:
```
let a = new Point2D(2.0, 5.5);
let b = new Point2D(2.0, 3.5);
let p = Line.findPoint(a, b, 0.5);//returns a Point2D with x=2.0, y=4.5
```

Example 3:

```
let a = new Point2D(2.0, 5.5);
let b = new Point2D(2.0, 3.5);
let p = Line.findPoint(a, b, 1.5);//returns null
```
