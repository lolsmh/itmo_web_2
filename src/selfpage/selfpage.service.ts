import { Injectable } from '@nestjs/common';

@Injectable()
export class SelfpageService {
  getHello(): string {
    return 'Hello World!';
  }
}
