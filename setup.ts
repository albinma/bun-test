import { afterAll, beforeAll } from "bun:test";
import { redis } from "./redis";

beforeAll(() => {
  console.log("Before all tests");
});

afterAll(async () => {
  console.log("After all tests");
  redis.disconnect();
  await redis.quit();
});
