import { describe, it, expect, beforeAll, afterAll } from "bun:test";
import { createClient, RedisClientType } from "redis";
import { redis } from "./redis";

describe("Redis", () => {
  // let redis: RedisClientType;
  // beforeAll(async () => {
  //   redis = createClient();
  //   await redis.connect();
  // });

  // afterAll(async () => {
  //   await redis.quit();
  // });

  it("should connect", async () => {
    expect(await redis.ping()).toBe("PONG");
  });
});
