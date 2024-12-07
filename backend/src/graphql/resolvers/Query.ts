import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const Query = {
  leads: async () => {
    return prisma.lead.findMany();
  },
  lead: async (_: any, { id }: { id: number }) => {
    return prisma.lead.findUnique({ where: { id } });
  },
};