import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
  } from '@nestjs/websockets';
  import { Logger } from '@nestjs/common';
  import { Socket, Server } from 'socket.io';
  
  @WebSocketGateway({ namespace: 'chat' })
  export class ChatGateway {
  
    @WebSocketServer()
    server: Server;

    private logger: Logger = new Logger('AppGateway');
  
    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string) {
      console.log('handled message:', message);
      this.server.emit('message', message);
    }

    afterInit(server: Server) {
      this.logger.log('Init');
    }
  
    handleDisconnect(client: Socket) {
      this.logger.log(`Client disconnected: ${client.id}`);
    }
  
    handleConnection(client: Socket, ...args: any[]) {
      this.logger.log(`Client connected: ${client.id}`);
    }
  }