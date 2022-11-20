import { publicProcedure, router } from "../trpc";

import { z } from "zod";

export const templateRouter = router({
  create: publicProcedure
    .input(
      z.object({
        description: z.string().optional(),
        name: z.string(),
        tiers: z.array(
          z.object({
            name: z.string(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.template.create({
        data: {
          authorId: ctx.session?.user?.id,
          description: input.description,
          name: input.name,
          tiers: { create: input.tiers.map((tier) => ({ name: tier.name })) },
        },
        include: {
          tiers: true,
        },
      });
    }),

  get: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.template.findMany({
      take: 7,
      include: {
        tiers: false,
      },
    });
  }),
});
