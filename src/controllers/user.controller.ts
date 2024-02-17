import { Prisma, PrismaClient } from "@prisma/client"

export class UserController {
    constructor (public prisma: PrismaClient) {
        this.prisma = prisma
    }

    async updateUser(where: Prisma.UserWhereUniqueInput, data: object) {
        try {
            return this.prisma.user.update({
                where,
                data
            })
        } catch (error) {
            console.error(error)
            throw new Error(error as string);
        }
    }
}