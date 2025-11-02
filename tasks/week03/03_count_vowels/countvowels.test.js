
const { countVowels } = require('./countvowels.js');


function Count_On_EmptyString()
{
    let line = '';


    let result = countVowels(line);
    let answer = [0, 0, 0, 0, 0];

    expect(result).toEqual( answer);

}


function Count_On_SingleCharacterString()
{
    let line = "a";


    let result = countVowels(line);
    let answer = [1, 0, 0, 0, 0];

    expect(result).toEqual( answer);

}


function Count_On_SingleCharacterString_NoVowel()
{
    let line = "c";


    let result = countVowels(line);
    let answer = [0, 0, 0, 0, 0];

    expect(result).toEqual( answer);

}


function Count_On_RegularString_1()
{
    let line = "Hello World";


    let result = countVowels(line);
    let answer = [0, 1, 0, 2, 0];

    expect(result).toEqual( answer);

}


function Count_On_RegularString_2()
{
    let line = "Good evening everyone! How are you?";


    let result = countVowels(line);
    let answer = [1, 6, 1, 5, 1];

    expect(result).toEqual( answer);

}


function Count_On_AllVowels()
{
    let line = "AAaaEEeeooOOiiIIuuUU";


    let result = countVowels(line);
    let answer = [4, 4, 4, 4, 4];

    expect(result).toEqual( answer);

}

test("Count_On_EmptyString", Count_On_EmptyString);
test("Count_On_SingleCharacterString", Count_On_SingleCharacterString);
test("Count_On_SingleCharacterString_NoVowel", Count_On_SingleCharacterString_NoVowel);
test("Count_On_RegularString_1", Count_On_RegularString_1);
test("Count_On_RegularString_2", Count_On_RegularString_2);
test("Count_On_AllVowels", Count_On_AllVowels);
