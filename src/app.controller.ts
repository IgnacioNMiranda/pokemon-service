import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Verifies API status' })
  @ApiResponse({ status: 200, description: 'OK!' })
  health(): string {
    return this.appService.health();
  }
}
