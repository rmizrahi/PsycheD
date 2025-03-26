const request = require("supertest");
const app = require("../src/app");

let server;

beforeAll(() => {
    server = app.listen(4000); // Start test server on a different port
});

afterAll((done) => {
    server.close(done); // Close server after tests
});

describe("GET /", () => { 
    it("should return Hello, World!", async () => {
        const res = await request(app).get("/");
        expect(res.text).toBe("Hello, World!");
    });
});