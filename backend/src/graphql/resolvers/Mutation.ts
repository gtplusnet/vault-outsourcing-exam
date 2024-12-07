import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const Mutation = {
  register: async (_: any, { name, email, mobile, services }: any) => {
    return prisma.lead.create({
      data: { name, email, mobile, services },
    });
  },
};