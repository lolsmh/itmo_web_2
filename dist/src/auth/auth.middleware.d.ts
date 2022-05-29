import { NestMiddleware } from "@nestjs/common";
export declare class AuthMiddleware implements NestMiddleware {
    supertokensMiddleware: any;
    constructor();
    use(req: Request, res: any, next: () => void): any;
}
