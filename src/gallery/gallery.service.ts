import { Injectable } from '@nestjs/common';

@Injectable()
export class GalleryService {
  getHello(): string {
    return 'Hello World!';
  }
}