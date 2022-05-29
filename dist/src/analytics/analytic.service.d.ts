import { ActivePage, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class AnalyticsService {
    private prismaServise;
    constructor(prismaServise: PrismaService);
    addActivePage(data: Prisma.ActivePageCreateInput): Promise<ActivePage>;
    getAllPages(): Promise<ActivePageInfo[]>;
}
export declare type ActivePageInfo = {
    pageLink: string;
    count: number;
};
