import { startServer, closeServer } from './server.js';

const INDEX_HTML = `<!DOCTYPE html>
<html>

<head>
  <title>My First Web Page!</title>
  <meta charset="utf-8" />
</head>

<body>
  <article>
    <header>Bug Story!</header>
    <section>
      This is a story
      about a bug
      that had
      a very rainy day
    </section>
  </article>
</body>

</html>`;


const ABOUT_HTML = `<!DOCTYPE html>
<html>

<head>
  <title>About Page!</title>
  <meta charset="utf-8" />
</head>

<body>
  <h1>Welcome to a news site about bugs!</h1>
  <article>
    <header>A new mega-bug</header>
    <section>A new giant-mega-bug has been observed in bug-land</section>
  </article>
  <footer>This has been a new-bug-daily site</footer>
</body>

</html>`;


beforeAll(async function() {
  return startServer();
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
    domain: 'localhost:3000',
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
          domain: 'localhost:3000',
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
          domain: 'localhost:3000',
          endpoint: endpoints[i],
          options: options[i]
        })();
      expect(result).toEqual(expecteds[i]);
    };
    
  });
}


apiSingleTest(
  {
    title: "GET / - gets index.html",
    endpoint: "/",
    options: {
      method: "GET",
    },
    expected: INDEX_HTML
  }
)


apiSingleTest(
  {
    title: "GET /about.html - gets index.html",
    endpoint: "/about.html",
    options: {
      method: "GET",
    },
    expected: ABOUT_HTML
  }
)


