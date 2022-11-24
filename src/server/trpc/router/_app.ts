import { authRouter } from "./auth";
import { router } from "../trpc";
import { templateRouter } from "./template";

export const appRouter = router({
  auth: authRouter,
  template: templateRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
