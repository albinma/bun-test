import { afterAll, afterEach, beforeAll } from "bun:test";
import { redis } from "./redis";

// afterEach(async () => {
//   redis.disconnect();
//   await redis.quit();
// });

afterEach(async () => {
  console.log("After each tests");
  // await redis.quit();
});

afterAll(async () => {
  console.log("After all tests");
  // await redis.quit();
});
