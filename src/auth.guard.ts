import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoggerMiddleware } from './middelware/logger.middleware';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const req = context.switchToHttp().getRequest()

    const user = req.body["role"]
    console.log("AuthGurd user name :" ,req.body["username"] );
    // console.log(user,"AuthGurd User");
    if (!roles) {
      console.log('There is no Role field');
      return true;
    }
    else{
      if (roles == user) {
        console.log("You are admin");
        
        return true
      }
      else{

        console.log("is Not Auth Gard");
        throw new UnauthorizedException()
      }
  
    }
  
  }
}
