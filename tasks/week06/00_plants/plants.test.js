

function procTest({
  title,
  testFn
}) {
  test(title, testFn);
}


procTest({
  title: 'plant - properties',
  testFn: function() {
    let p = new Plant(2.0, "Rose");
    expect(p.getSpecies()).toEqual('Rose');
    expect(p.getHeight()).toEqual(2.0);
    expect(p.isAlive()).toEqual(true);
    expect(p.isWeed()).toEqual(true);
  }
})

procTest({
  title: 'weed - properties',
  testFn: function() {
    let p = new Weed(1.0, "Thorn");
    expect(p.getSpecies()).toEqual('Thorn');
    expect(p.getHeight()).toEqual(1.0);
    expect(p.isAlive()).toEqual(true);
    expect(p.isWeed()).toEqual(true);
  }
})

procTest({
  title: 'plant - not equal to weed',
  testFn: function() {
    let p1 = new Plant(2.0, "Rose");
    let p2 = new Weed(2.0, "Rose");

    expect(p1).toEqual(p2);
    expect(p1.compare(p2)).toEqual(false);
  }
})

procTest({
  title: 'plant - equality',
  testFn: function() {
    let p1 = new Plant(2.0, "Rose");
    let p2 = new Plant(2.0, "Rose");

    expect(p1).toEqual(p2);
    expect(p1.compare(p2)).toEqual(true);
  }
})
procTest({
  title: 'plant - properties',
  testFn: function() {
    let garden = [
      new Plant(1.0, "Rose"),
      new Plant(1.0, "Rose"),
      new Weed(1.0, "Thorn"),
      new Plant(1.0, "Rose"),
      new Weed(1.0, "Cactus"),
    ];

    
  }
})
//TODO: Finish the rest
