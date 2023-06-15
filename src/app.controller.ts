import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("/api")
class AppController {
  constructor(private apService: AppService) {}
  @Get("/users")
  getUsers() {
    return this.apService.getUser();
  }
}

export { AppController };
