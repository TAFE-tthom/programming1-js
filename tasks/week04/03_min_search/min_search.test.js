
const find_min = require('./min_search.js');


function FindMin_On_EmptyArray()
{
    let emptyArray = [];
    let result = find_min(emptyArray);
    expect(result).toEqual(null)
}


function FindMin_On_SingleArray()
{
    let singleArray = [ 1 ];
    let result = find_min(singleArray);
    expect(result).toBeDefined();
    expect(result).toBe(1);
}


function FindMin_On_ArrayOfTwo()
{
    let array = [ 1, 2 ];
    let result = find_min(array);
    expect(result).toBeDefined();
    expect(result).toBe(1);
}


function FindMin_On_ArrayOfTwo_ReverseOrder()
{
    let array = [ 2, 1 ];
    let result = find_min(array);
    expect(result).toBeDefined();
    expect(result).toBe(1);
}


function FindMin_On_LargerArray()
{
    let array = [ 2, 1, 3, 5, 0 ];
    let result = find_min(array);
    expect(result).toBeDefined();
    expect(result).toBe(0);
}


function FindMin_On_LargerArray_WithNegatives()
{
    let array = [ 2, -1, 3, -5, 0 ];
    let result = find_min(array);
    expect(result).toBeDefined();
    expect(result).toBe(-5);
}

test('FindMin_On_EmptyArray',FindMin_On_EmptyArray);
test('FindMin_On_SingleArray',FindMin_On_SingleArray);
test('FindMin_On_ArrayOfTwo',FindMin_On_ArrayOfTwo);
test('FindMin_On_ArrayOfTwo_ReverseOrder',FindMin_On_ArrayOfTwo_ReverseOrder);
test('FindMin_On_LargerArray',FindMin_On_LargerArray);
test('FindMin_On_LargerArray_WithNegatives',FindMin_On_LargerArray_WithNegatives);
