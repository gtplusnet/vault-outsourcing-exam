import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const Query = {
  leads: async () => {
    return prisma.lead.findMany();
  },
  lead: async (_: any, { id }: { id: number }) => {
    return prisma.lead.findUnique({ where: { id } });
  },
  serviceCounts: async () => {
    const deliveryCount = await prisma.lead.count({
      where: { services: { has: 'DELIVERY' } },
    });
    const pickupCount = await prisma.lead.count({
      where: { services: { has: 'PICKUP' } },
    });
    const paymentCount = await prisma.lead.count({
      where: { services: { has: 'PAYMENT' } },
    });

    return { delivery: deliveryCount, pickup: pickupCount, payment: paymentCount };
  },
};