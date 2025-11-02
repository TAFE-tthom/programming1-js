

const JobQueue = require('./JobQueue.js');


function procTest({
  title,
  fnlistBatches, // array of arrays
  expected
}) {

  test(`jobqueue-test - ${title}`, function(){

    //1. Adds jobs
    let fncount = 0;
    let jobq = new JobQueue();
    for(let fnlist of fnlistBatches) {
      fncount += fnlist.length;
      for(let f of fnlist) {
        jobq.addJob(f);
      }
    }

    //2. Execute jobs
    for(let i = 0; i < fncount; i++) {
      let job = jobq.getNextJob();
      let result = job();
      expect(result).toEqual(expected[i]);
    }
  });
}


procTest(
  {
    title: 'One Job',
    fnlistBatches:
    [
      [
        () => { return "That one job"; }
      ]
    ],
    expected: [
      "That one job"
    ]
    
  }
)

procTest(
  {
    title: 'Two jobs',
    fnlistBatches:
    [
      [
        () => { return "That one job"; },
        () => { return "This is a second job"; },
      ]
    ],
    expected: [
      "That one job",
      "This is a second job",
    ]
    
  }
)

procTest(
  {
    title: 'Three Jobs',
    fnlistBatches:
    [
      [
        () => { return "That one job"; },
        () => { return "Sleeping"; },
        () => { return "Sleeping"; }
      ]
    ],
    expected: [
      "That one job",
      "Sleeping",
      "Sleeping"
    ]
    
  }
)
