import { createClient } from "redis";

// const redis = new Redis();
const redis = createClient();
await redis.connect();
export { redis };
