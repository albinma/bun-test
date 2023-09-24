# bun-test

Example of `bun test` leaving open handles when using ioredis and preload test setup does not disconnect from redis.

To install dependencies:

```bash
bun install
```

To run:

```bash
docker compose up -d
bun test --preload setup.ts
```

This project was created using `bun init` in bun v1.0.3. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
