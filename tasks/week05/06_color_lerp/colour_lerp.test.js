
const colorLerp = require('./colour_lerp');


function procTest({
  start,
  end,
  n,
  expected
}) {

  test(`coloLerp: ${start} --${n}--> ${end}`, function() {
    const testExpect = expected;
    const result = colorLerp(start, end, n);

    expect(result).toEqual(testExpect);
  });
  
}


procTest({
  start: '0x002222',
  end: '0xFFDD33',
  n: 3,
  expected:[
    '0x002222',
    '0x405126',
    '0x80802a',
    '0xbfae30',
    '0xffdd34',
  ]
});

procTest({
  start: '0x000000',
  end: '0xFF0000',
  n: 0,
  expected:[
    '0x000000',
    '0xff0000'
  ]
});

procTest({
  start: '0x000000',
  end: '0xFF0000',
  n: 1,
  expected:[
    '0x000000',
    '0x800000',
    '0xff0000'
  ]
});

procTest({
  start: '0x000000',
  end: '0xFF0000',
  n: 7,
  expected:[
    '0x000000',
    '0x200000',
    '0x400000',
    '0x600000',
    '0x800000',
    '0xa00000',
    '0xc00000',
    '0xe00000',
    '0xff0000'
  ]
});

procTest({
  start: '0xFFDD33',
  end: '0x002222',
  n: 3,
  expected:[
    '0x002222',
    '0x405126',
    '0x80802a',
    '0xbfae30',
    '0xffdd34',
  ]
});
