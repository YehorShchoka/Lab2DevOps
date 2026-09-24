const { test } = require("node:test");
const assert = require("node:assert");
const request = require("supertest");
const app = require("../backend/server");

test("GET / returns 200", async () => {
  const res = await request(app).get("/");
  assert.strictEqual(res.statusCode, 200);
});
