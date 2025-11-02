import { startServer, closeServer, setConfig } from './server.js';



let FileMap = new Map();

beforeAll(async function() {
  const contents = [
    ["bugs", await ReadFileToString('./myfiles/bugs.txt')],
    ["person", await ReadFileToString('./myfiles/person.txt')],
  ]
 
  for(const tf of contents) {
    const [name, data] = tf;
    FileMap.set(name, data);
  }
  
  return setConfig({
      files: "./myfiles",
      port: 4114
    }).then(() => startServer());
});

afterAll(async function() {
  return closeServer();
});

function apiCall({ domain, endpoint, options }) {
  return async function() {
    const fullname = `http://${domain}${endpoint}`;
    return fetch(fullname, options).then((resp) => resp.text());
  }
  
}

async function apiSingleTest({title, endpoint, options, expected}) {

  let callable = apiCall({
    domain: 'localhost:4114',
    endpoint,
    options,
  });

  test(`TodoAPI - ${title}`, async function() {
    let result = await callable();
    expect(result).toEqual(expected);
  });

}

async function apiManyTestLast({ title, endpoints, options, expected}) {

  test(`TodoAPI - ${title}`, async function() {
    let result = null;
    for(let i = 0; i < endpoints.length; i++) {
      result = await apiCall({
          domain: 'localhost:4114',
          endpoint: endpoints[i],
          options: options[i]
        })();
    };
    
    expect(result).toEqual(expected);
  });
}

async function apiManyTestMany({title, endpoints, options, expecteds }) {
  
  test(`TodoAPI - ${title}`, async function() {
    for(let i = 0; i < endpoints.length; i++) {
      const result = await apiCall({
          domain: 'localhost:4114',
          endpoint: endpoints[i],
          options: options[i]
        })();
      expect(result).toEqual(expecteds[i]);
    };
    
  });
}

apiSingleTest(
  {
    title: "GET /download/bugs.txt",
    endpoint: "/download/bugs.txt",
    options: {
      method: "GET",
    },
    expected: "bugs"
  }
)

apiSingleTest(
  {
    title: "GET /download/person.txt",
    endpoint: "/download/person.txt",
    options: {
      method: "GET",
    },
    expected: "person"
  }
)


