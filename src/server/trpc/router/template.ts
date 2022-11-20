import { publicProcedure, router } from "../trpc";

import { z } from "zod";

export const templateRouter = router({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.log("----", { ctx, input });
      await ctx.prisma.template.create({
        data: {
          name: input.name,
          authorId: ctx.session?.user?.id,
        },
      });
    }),
});
