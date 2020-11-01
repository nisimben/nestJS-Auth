import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthService } from './auth/auth.service';
import { LoggerMiddleware } from 'src/middelware/logger.middleware';
import { CheckTokenMiddleware } from 'src/middelware/check-token.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService, AuthService]
})
export class UserModule {
  configure(consumer:MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes(UserController)
    consumer.apply(CheckTokenMiddleware).forRoutes(UserController)
  }

   
  
}
