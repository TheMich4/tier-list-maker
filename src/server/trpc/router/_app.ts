import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { router } from "../trpc";
import { templateRouter } from "./template";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  template: templateRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
