import { Injectable } from '@nestjs/common';

@Injectable()
export class iOSService {
  getHello(): string {
    return 'Hello World!';
  }
}