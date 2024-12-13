import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getHello(): string {
    return 'Hello World!';
  }

  async findAll(): Promise<any[]> {
    return [];
  }
}
