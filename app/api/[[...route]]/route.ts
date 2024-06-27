import { z } from "zod";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

const runtime = "nodejs";

const app = new Hono().basePath("/api");

app
  .get("/hello", clerkMiddleware(), (c) => {
    const auth = getAuth(c);
    if (!auth?.userId) return c.json({ error: "Unauthorized" });

    return c.json({ message: "Hello, World!" });
  })
  .get(
    "/hello/:test",
    zValidator(
      "param",
      z.object({
        test: z.string(),
      })
    ),
    (c) => {
      const { test } = c.req.valid("param");

      return c.json({ message: `Hello, world!`, test });
    }
  );

export const GET = handle(app);
export const POST = handle(app);
