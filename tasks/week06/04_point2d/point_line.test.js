
const Point2D = require('./point.js');
const Line = require('./line.js');

test('test getx', function() {
  let p = new Point2D(1.0, 2.0);
  expect(p.getX()).toEqual(1.0, 0.0001);
});

test('test gety', function() {
  let p = new Point2D(1.0, 2.0);
  expect(p.getY()).toEqual(2.0, 0.0001);
});

test('test getx', function() {
  let p = new Point2D(11.0, 3.0);
  let [x, y] = p.getCoords();
  expect(x).toEqual(11.0, 0.0001);
  expect(y).toEqual(3.0, 0.0001);

});

test('test dist1', function() {
  fail('Tests are not done');
});
