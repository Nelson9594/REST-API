import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOneInvoice = async ({ client, total, user }) => {
    return prisma.invoice.create({
        data: {
            client,
            total,
            user
        }
    });
}

export const updateinvoice = async ({ id, client, total, user }) => {
    return prisma.invoice.update({
        where:{
            id,
        },
        data: {
            client,
            total,
            user
        }
    });
}

export const deleteInvoice = async (id) => {
    return prisma.invoice.delete({
        where: { id }
    });
}

export const findById = async (id) => {
    return prisma.invoice.findUnique({
        where: { id },
    }
    );
}


