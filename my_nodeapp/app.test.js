const request = require("supertest");
const server = require("./app"); // Import the server

describe("Node.js HTTP Server Tests", () => {
  afterAll(() => {
    server.close(); // Close the server after tests
  });

  test("GET / should return status 200 and contain 'Welcome to My Node.js Application'", async () => {
    const response = await request(server).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Welcome to My Node.js Application");
  });

  test("GET /about should return status 200 and contain 'About This Application'", async () => {
    const response = await request(server).get("/about");
    expect(response.status).toBe(200);
    expect(response.text).toContain("About This Application");
  });

  test("GET /contact should return status 200 and contain 'Contact Us'", async () => {
    const response = await request(server).get("/contact");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Contact Us");
  });

  test("GET /unknown should return 404", async () => {
    const response = await request(server).get("/unknown");
    expect(response.status).toBe(404);
    expect(response.text).toContain("404 - Page Not Found");
  });
});
