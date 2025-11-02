
const verifyPuzzle = require('./verifier.js')


test('testBasic', function() {
   
	let b = [
		[3, 2, 1],
		[null, null, null],
		[9, 8, 6]
	];
	expect(verifyPuzzle(b)).toBe(true)
})
test('testBasicUnsolvable', function() {
  
	let b = [
		[1, 2, 2],
		[3, 4, 6],
		[7, 5, 9]
	];
	expect(verifyPuzzle(b)).toBe(false)
})
test('testSolved', function() {
  
	let b = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	];
	expect(verifyPuzzle(b)).toBe(true)
})
test('testEmpty', function() {
  
	let b = [
		[null, null, null],
		[null, null, null],
		[null, null, null]
	];
	expect(verifyPuzzle(b)).toBe(true)
})
test('testGridCheckSolvable', function() {
  
	let b = [
		[1, 2, 3],
		[9, 8, 4],
		[5, 6, null]
	];
	expect(verifyPuzzle(b)).toBe(true)
})
test('testGridCheckUnsolvable', function() {
  
	let b = [
		[1, 2, 3],
		[9, 8, 4],
		[4, 6, null]
	];
	expect(verifyPuzzle(b)).toBe(false)
})
test('testLargeUnsolvable', function() {
  
	let b = [
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[2, null, 4, null, 6, 7, 8, 9, 1],
		[3, 4, null, 6, 7, 8, 9, 1, 2],
		[4, 5, 6, 7, 8, 9, 1, 2, 3],
		[5, 6, 7, 8, 9, null, 2, 3, 4],
		[6, 7, null, 9, 1, 2, 3, 4, 5],
		[7, 8, 9, 1, 2, 3, 4, 5, 6],
		[8, 9, 1, 2, 3, 4, 5, 6, 7],
		[9, 8, 7, 6, 5, 4, 3, 2, null]
	];
	expect(verifyPuzzle(b)).toBe(false)
})
test('testLargeSolvable', function() {
  
	let b = [
		[1, 2, 3, 4, 5, null, 7, null, null],
		[null, null, null, null, null, 7, null, null, 1],
		[null, 4, null, 6, null, 8, null, null, 2],
		[4, 5, null, 7, 8, 9, 1, null, 3],
		[null, null, 7, null, null, null, 2, null, null],
		[6, null, 8, null, 1, 2, null, null, 5],
		[7, null, 9, 1, null, 3, 4, 5, 6],
		[8, null, 1, 2, null, null, null, null, 7],
		[null, null, null, 6, 5, 4, 3, 2, null]
	];
	expect(verifyPuzzle(b)).toBe(true)
})
