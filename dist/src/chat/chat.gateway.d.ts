import { Socket, Server } from 'socket.io';
export declare class ChatGateway {
    server: Server;
    private logger;
    handleMessage(message: string): void;
    afterInit(server: Server): void;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket, ...args: any[]): void;
}
