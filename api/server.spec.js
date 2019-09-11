const request = require('supertest');
const server = require('./server.js');

// Tests for GET '/api/users/'
/*
 test {
     describe: "server.js",
     body: {
         describe: "index route",
         body: {

         }
     }
 }
 
describe.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('$a + $b', ({a, b, expected}) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(a + b).not.toBeLessThan(expected);
  });
});
*/

describe.each`
  route               |  expected
  ${"categories"}     |  ${[]}
  ${"habits"}         |  ${[]}
  ${"tracked_habits"} |  ${[]}
`('GET api/users/1/$route', ({route, expected}) => {
  it(`when logged-in, should return ${expected}`, async () => {
    const response = await request(server).get(`/api/users/1/${route}`)
    console.log(response); 
    expect(response.status).toEqual(200);
    // expect(response.body).toEqual(loggedIn); // Uncomment out once returned object is decided
    expect(response.type).toEqual("application/json");
  });
  it(`when logged-out, should return {"message":"You're not allowed in here!"}`, async () => {
    const response = await request(server).get(`/api/users/1/${route}`)
    const restricted = {"message":"You're not allowed in here!"};
    expect(response.status).toEqual(400);
    expect(response.body).toEqual(restricted);
    expect(response.type).toEqual("application/json");
  });
});



/*
describe('server.js', () => {
  describe('index route', () => {
    it('should return an OK status code from the index route', async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get('/');
      expect(response.status).toEqual(expectedStatusCode);
    });

    it('should return confirmation message that server is running', async () => {
      const expectedBody = "Server up and running...";
      const response = await request(server).get('/');
      console.log(`!!! ${response.text}`);
      expect(response.text).toEqual(expectedBody);
    });

    it('should return text from the index route', async () => {
      const response = await request(server).get('/');
      expect(response.type).toEqual('text/html');
    });
  });
});
*/