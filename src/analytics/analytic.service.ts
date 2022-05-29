import { Injectable } from '@nestjs/common';
import { ActivePage, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AnalyticsService {

    constructor(private prismaServise: PrismaService) {}

    async addActivePage(data: Prisma.ActivePageCreateInput): Promise<ActivePage> {
        return await this.prismaServise.activePage.create({
            data
        })
    }

    async getAllPages(): Promise<ActivePageInfo[]> {
        const pages = await this.prismaServise.activePage.findMany()
        const count = new Map<string, number>();
        pages.forEach(element => {
            count.set(element.link, (count.get(element.link) || 0) + 1)
        })
        let result = []
        count.forEach ((value, key) => {
            result.push({ pageLink: key, count: value })
        })

        return result
    }
}

export type ActivePageInfo = {
    pageLink: string
    count: number
}