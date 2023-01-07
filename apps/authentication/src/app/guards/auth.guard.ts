import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JsonWebTokenError } from 'jsonwebtoken';
import { Observable } from 'rxjs';
import { verifyToken } from '../utils/jwt';

export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();

    return this.validateRequest(request, response);
  }

  // Check if token is valid or not.
  validateRequest(
    request: Request,
    response: Response
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
        // Parse token from header
      const payload = verifyToken(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlhdCI6MTY3MzAzMDI0MH0.Z_7i-4rWreI1WqrDzZFV2hOD0nIMp-EClEGpoDSif8w'
      );
      console.log(payload);
      return true;
    } catch (e) {
      if (e instanceof JsonWebTokenError){
        return false
      };
    }
  }
}
