import { Controller, Get, Headers, Query, UseGuards } from '@nestjs/common';

import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/signup")
  login(@Headers('user') user: string, @Query("id") id: string) {
    return this.appService.getData(id);
  }

  @Get("/profile")
  @UseGuards(AuthGuard)
  profile() {
    return this.appService.profile();
  }

  @Get("/login")
  signup(@Headers('user') user: string, @Query("id") id: string) {
    return this.appService.login();
  }
}