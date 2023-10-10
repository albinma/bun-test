import { afterAll, beforeAll } from "bun:test";
import { redis } from "./redis";

afterAll(async () => {
  console.log("After all tests");
  await redis.quit();
  // await redis.disconnect();
});
