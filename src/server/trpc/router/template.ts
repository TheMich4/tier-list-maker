import { publicProcedure, router } from "../trpc";

import { z } from "zod";

export const templateRouter = router({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        tiers: z.array(
          z.object({
            name: z.string(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.log({ ctx, input, tiers: input.tiers });
      await ctx.prisma.template.create({
        data: {
          authorId: ctx.session?.user?.id,
          name: input.name,
          tiers: { create: input.tiers.map((tier) => ({ name: tier.name })) },
        },
        include: {
          tiers: true,
        },
      });
    }),
});
