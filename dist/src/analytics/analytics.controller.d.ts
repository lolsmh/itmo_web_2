import { AnalyticsService } from './analytic.service';
import { Response } from 'express';
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    showTodo(response: Response): void;
}
