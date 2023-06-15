import { Injectable } from "@nestjs/common";

@Injectable()
class AppService {
  getUser() {
    return [{ name: "Alex", email: "Noname email" }];
  }
}

export { AppService };
