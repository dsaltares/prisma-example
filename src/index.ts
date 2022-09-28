import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  try {
    await testPrisma();
  } finally {
    await prisma.$disconnect();
  }
};

const testPrisma = async () => {
  await prisma.user.create({
    data: { name: 'Ada Lovelace', email: 'ada.lovelace@hier.in' },
  });

  const allUsers = await prisma.user.findMany();
  // eslint-disable-next-line no-console
  console.log(allUsers);

  await prisma.user.deleteMany();
};

void main();
