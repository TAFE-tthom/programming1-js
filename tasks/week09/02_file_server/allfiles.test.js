import { startServer, closeServer, setConfig } from './server.js';


let FileMap = new Map();

beforeAll(async function() {

  const contents = [
    ["hello", await ReadFileToString('./all_files/hello.js')],
    ["style", await ReadFileToString('./all_files/style.css')],
    ["message", await ReadFileToString('./all_files/message.txt')],
  ]
 
  for(const tf of contents) {
    const [name, data] = tf;
    FileMap.set(name, data);
  }
  
  return setConfig({
      files: "./all_files",
      port: 3115
    }).then(() => startServer());
});

afterAll(async function() {
  return closeServer();
});


async function ReadFileToString(path) {
  const file = fs.createReadStream(path)
  const rl = readline.createInterface({
    input: file
  })
  const data = '';
  for await(const line of rl) {
    data += line + '\n';
  }
  return data;
}


function apiCall({ domain, endpoint, options }) {
  return async function() {
    const fullname = `http://${domain}${endpoint}`;
    return fetch(fullname, options).then((resp) => resp.text());
  }
  
}

async function apiSingleTest({title, endpoint, options, expected}) {

  let callable = apiCall({
    domain: 'localhost:3000',
    endpoint,
    options,
  });

  test(`TodoAPI - ${title}`, async function() {
    let result = await callable();
    expect(result).toEqual(expected);
  });

}

apiSingleTest(
  {
    title: "GET /download/hello.js",
    endpoint: "/download/hello.js",
    options: {
      method: "GET",
    },
    expected: "hello"
  }
)

apiSingleTest(
  {
    title: "GET /download/style.css",
    endpoint: "/download/style.css",
    options: {
      method: "GET",
    },
    expected: "style"
  }
)


apiSingleTest(
  {
    title: "GET /download/message.txt",
    endpoint: "/download/message.txt",
    options: {
      method: "GET",
    },
    expected: "message"
  }
)


