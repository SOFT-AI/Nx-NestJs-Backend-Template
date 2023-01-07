import { Injectable } from '@nestjs/common';
import { signToken } from "./utils/jwt";

@Injectable()
export class AppService {
  getData(values: string): { message: string; header: string; } {
    return { message: 'Welcome to authentication!', header: values };
  }

  login(): {token: string} {
    const token = signToken();

    return {
      token
    };
  }

  profile(): string {
    return "Profile info"
  }
}
