import { describe, it, expect, beforeAll, afterAll } from "bun:test";
import { redis } from "./redis";
import { RedisClientType, createClient } from "redis";

describe("Redis", () => {
  beforeAll(async () => {});

  afterAll(async () => {
  });

  it("should connect", async () => {
    expect(await redis.ping()).toBe("PONG");
  });
});
